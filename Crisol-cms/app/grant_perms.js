const Database = require('better-sqlite3');
const db = new Database('.tmp/data.db');

const apis = [
  'evento-anual',
  'integrante',
  'galeria-foto',
  'testimonio',
  'nivel-pdf',
  'seminario-anual',
  'clase-jornada'
];

const actions = ['find', 'findOne'];

// Role 2 is Public
const publicRoleId = 2;

for (const api of apis) {
  for (const act of actions) {
    const actionName = `api::${api}.${api}.${act}`;
    
    // Check if permission exists
    let perm = db.prepare('SELECT id FROM up_permissions WHERE action = ?').get(actionName);
    let permId;
    if (!perm) {
      const now = Date.now();
      const docId = Math.random().toString(36).substring(2, 12);
      const res = db.prepare(`
        INSERT INTO up_permissions (document_id, action, created_at, updated_at, published_at)
        VALUES (?, ?, ?, ?, ?)
      `).run(docId, actionName, now, now, now);
      permId = res.lastInsertRowid;
    } else {
      permId = perm.id;
    }

    // Link permission to public role
    const linkExists = db.prepare('SELECT id FROM up_permissions_role_lnk WHERE permission_id = ? AND role_id = ?').get(permId, publicRoleId);
    if (!linkExists) {
      db.prepare(`
        INSERT INTO up_permissions_role_lnk (permission_id, role_id)
        VALUES (?, ?)
      `).run(permId, publicRoleId);
    }

    console.log(`Granted public access for: ${actionName}`);
  }
}
console.log('Public permissions setup completed successfully!');
