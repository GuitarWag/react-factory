echo 'cleaning node_modules';
rm -rf node_modules
echo 'cleaning packages';
rm -rf packages/**/*/node_modules
rm -rf packages/**/*/lib
rm -rf packages/**/*/coverage
echo 'done!! :)';
