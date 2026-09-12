import pexpect
import sys

child = pexpect.spawn('ssh root@194.163.144.149')
child.expect('password:')
child.sendline('dK2wDG61W5K4PFx7OBlKAOKR8')
child.expect('# ')
child.sendline('cd /opt/primigenias33')
child.expect('# ')

# Run git pull
child.sendline('cd Crisol && git pull origin main && cd ..')
child.expect('# ')
print(child.before.decode())

# Rebuild web app
child.sendline('docker compose -f docker-compose.prod.yml build --no-cache crisol-web-app')
child.expect('# ', timeout=300)
print(child.before.decode())

# Restart web app
child.sendline('docker compose -f docker-compose.prod.yml up -d --force-recreate crisol-web-app')
child.expect('# ')
print(child.before.decode())

# Set Moodle names
child.sendline('docker exec crisol-moodle-app php admin/cli/cfg.php --component=core --name=fullname --set="Primigenias"')
child.expect('# ')
child.sendline('docker exec crisol-moodle-app php admin/cli/cfg.php --component=core --name=shortname --set="Primigenias"')
child.expect('# ')

child.sendline('exit')
