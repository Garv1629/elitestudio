const { execSync } = require('child_process');

function exec(cmd) {
  console.log(`\n> ${cmd}`);
  try {
    const output = execSync(cmd, {
      shell: 'powershell.exe',
      stdio: ['pipe', 'pipe', 'pipe'],
      encoding: 'utf-8',
      cwd: 'e:\\elite studio'
    });
    if (output && output.trim()) console.log(output.trim());
    return { ok: true, output };
  } catch (err) {
    console.log(`Failed: ${err.message}`);
    if (err.stdout && err.stdout.trim()) console.log('stdout:', err.stdout.trim());
    if (err.stderr && err.stderr.trim()) console.error('stderr:', err.stderr.trim());
    return { ok: false, error: err };
  }
}

// 1. Set git user config if needed
exec('git config user.name "Garv1629"');
exec('git config user.email "garv1629@users.noreply.github.com"');

// 2. Stage all files
exec('git add -A');

// 3. Status check
exec('git status --short');

// 4. Commit
exec('git commit -m "feat: Elite Studios website with fully responsive luxury navbar"');

// 5. Remote origin configuration
exec('git remote remove origin');
exec('git remote add origin https://github.com/Garv1629/elitestudio.git');
exec('git branch -M main');

// 6. Push
console.log('\n--- Pushing to GitHub (https://github.com/Garv1629/elitestudio.git) ---');
const pushResult = exec('git push -u origin main');

if (pushResult.ok) {
  console.log('\n SUCCESS: Code successfully pushed to GitHub!');
} else {
  console.log('\n PUSH STATUS: See output above.');
}
