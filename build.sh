(
  cd ../mauma
  npm run build
)
sleep 1
npm uninstall @mauma/ssg
npm link @mauma/ssg
npm run build
