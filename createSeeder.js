//? HOW TO USE THIS
//! npm run seeder:create --name=SeederName

const { exec } = require('child_process');

// Ambil nama seed dari environment variable npm_config_name
const seederName = process.env.npm_config_name;

if (!seederName) {
    console.error('Error: npm_config_name is not set.');
    process.exit(1);
}

// Jalankan perintah untuk membuat seeder
const command = `npm run typeorm -- migration:create src/seeders/${seederName}`;

exec(command, (error, stdout, stderr) => {
    if (error) {
        console.error(`Error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`Stderr: ${stderr}`);
        return;
    }
    console.log(`Output: ${stdout}`);
});
