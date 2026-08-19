PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS pages (
  page_id TEXT PRIMARY KEY,
  path TEXT NOT NULL,
  title TEXT NOT NULL,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS commenters (
  id TEXT PRIMARY KEY,
  kind TEXT NOT NULL CHECK (kind IN ('guest', 'github')),
  external_id TEXT NOT NULL,
  display_name TEXT NOT NULL,
  avatar_url TEXT,
  profile_url TEXT,
  verified INTEGER NOT NULL DEFAULT 0 CHECK (verified IN (0, 1)),
  is_admin INTEGER NOT NULL DEFAULT 0 CHECK (is_admin IN (0, 1)),
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  UNIQUE(kind, external_id)
);

CREATE TABLE IF NOT EXISTS threads (
  id TEXT PRIMARY KEY,
  page_id TEXT NOT NULL,
  anchor_start INTEGER NOT NULL CHECK (anchor_start >= 0),
  anchor_end INTEGER NOT NULL CHECK (anchor_end >= anchor_start),
  anchor_fingerprint TEXT NOT NULL,
  anchor_quote TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'orphaned')),
  created_revision TEXT NOT NULL,
  updated_revision TEXT NOT NULL,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  FOREIGN KEY(page_id) REFERENCES pages(page_id),
  UNIQUE(page_id, anchor_fingerprint, status)
);
CREATE INDEX IF NOT EXISTS idx_threads_page ON threads(page_id, status);

CREATE TABLE IF NOT EXISTS comments (
  id TEXT PRIMARY KEY,
  thread_id TEXT NOT NULL,
  commenter_id TEXT NOT NULL,
  body TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'published' CHECK (status IN ('published', 'hidden', 'deleted')),
  version INTEGER NOT NULL DEFAULT 1,
  created_at TEXT NOT NULL,
  edited_at TEXT,
  FOREIGN KEY(thread_id) REFERENCES threads(id),
  FOREIGN KEY(commenter_id) REFERENCES commenters(id)
);
CREATE INDEX IF NOT EXISTS idx_comments_thread ON comments(thread_id, created_at);
CREATE INDEX IF NOT EXISTS idx_comments_commenter ON comments(commenter_id);

CREATE TABLE IF NOT EXISTS reports (
  id TEXT PRIMARY KEY,
  comment_id TEXT NOT NULL,
  reporter_key TEXT NOT NULL,
  reason TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'open' CHECK (status IN ('open', 'resolved', 'dismissed')),
  created_at TEXT NOT NULL,
  resolved_at TEXT,
  FOREIGN KEY(comment_id) REFERENCES comments(id),
  UNIQUE(comment_id, reporter_key)
);

CREATE TABLE IF NOT EXISTS admin_audit (
  id TEXT PRIMARY KEY,
  administrator_id TEXT NOT NULL,
  action TEXT NOT NULL,
  target_type TEXT NOT NULL,
  target_id TEXT NOT NULL,
  details_json TEXT NOT NULL,
  created_at TEXT NOT NULL,
  FOREIGN KEY(administrator_id) REFERENCES commenters(id)
);

CREATE TABLE IF NOT EXISTS site_state (
  id INTEGER PRIMARY KEY CHECK (id = 1),
  current_revision TEXT,
  previous_revision TEXT,
  transition_until TEXT,
  updated_at TEXT NOT NULL
);
INSERT OR IGNORE INTO site_state(id, updated_at) VALUES (1, '1970-01-01T00:00:00.000Z');

CREATE TABLE IF NOT EXISTS revision_mappings (
  id TEXT PRIMARY KEY,
  from_revision TEXT NOT NULL,
  to_revision TEXT NOT NULL,
  page_id TEXT NOT NULL,
  from_fingerprint TEXT NOT NULL,
  to_start INTEGER,
  to_end INTEGER,
  to_fingerprint TEXT,
  to_quote TEXT,
  status TEXT NOT NULL CHECK (status IN ('active', 'orphaned')),
  created_at TEXT NOT NULL,
  UNIQUE(from_revision, to_revision, page_id, from_fingerprint)
);
CREATE INDEX IF NOT EXISTS idx_revision_map_lookup
  ON revision_mappings(from_revision, to_revision, page_id, from_fingerprint);

CREATE TABLE IF NOT EXISTS pending_deploys (
  revision TEXT PRIMARY KEY,
  from_revision TEXT,
  payload_json TEXT NOT NULL,
  created_at TEXT NOT NULL,
  expires_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS oauth_states (
  state TEXT PRIMARY KEY,
  return_to TEXT NOT NULL,
  created_at TEXT NOT NULL,
  expires_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS auth_exchanges (
  code TEXT PRIMARY KEY,
  session_json TEXT NOT NULL,
  created_at TEXT NOT NULL,
  expires_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS used_write_grants (
  jti TEXT PRIMARY KEY,
  commenter_id TEXT NOT NULL,
  used_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS rate_limits (
  rate_key TEXT NOT NULL,
  action TEXT NOT NULL,
  window_start INTEGER NOT NULL,
  count INTEGER NOT NULL,
  expires_at TEXT NOT NULL,
  PRIMARY KEY(rate_key, action, window_start)
);

CREATE INDEX IF NOT EXISTS idx_expired_oauth_states ON oauth_states(expires_at);
CREATE INDEX IF NOT EXISTS idx_expired_auth_exchanges ON auth_exchanges(expires_at);
CREATE INDEX IF NOT EXISTS idx_expired_rate_limits ON rate_limits(expires_at);
