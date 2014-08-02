echo "Installing Kite prerequisites..."
apt-get update
apt-get install docker.io
ln -sf /usr/bin/docker.io /usr/local/bin/docker

echo "Installing Kite..."
wget --progress=bar https://usekite.com/kite.tar
docker load kite.tar

HOST=/sbin/ip -4 -o addr show dev eth0| awk '{split($4,a,"/");print a[1]}'
echo "All done! Visit http://$HOST/ to finish the installation."

