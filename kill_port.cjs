const { execSync } = require('child_process');

try {
  const out = execSync('netstat -ano').toString();
  const lines = out.split('\n').filter(l => l.includes(':3000') && l.includes('LISTENING'));
  console.log('Listening on 3000:', lines);
  lines.forEach(l => {
    const parts = l.trim().split(/\s+/);
    const pid = parts[parts.length - 1];
    if (pid && pid !== '0') {
      console.log('Killing PID:', pid);
      try {
        execSync(`taskkill /F /PID ${pid}`);
        console.log(`Killed PID ${pid}`);
      } catch (e) {
        console.log(`Error killing ${pid}:`, e.message);
      }
    }
  });
} catch (e) {
  console.error('Error:', e.message);
}
