#!/bin/bash

DATE=$(date +%Y_%m_%d-%H%M%S)
root_path="/web/ecshop-vue"
target_dir="dist"
dist_path="$root_path/$target_dir"
deploy_path="$root_path/deploy/"

if [ ! -d "$deploy_path" ]; then
  mkdir $deploy_path
fi
if [ ! -d "$dist_path" ]; then
  mkdir $dist_path
fi

# backup && deploy
mv "$dist_path"  "$deploy_path$target_dir-$DATE"
mv "$deploy_path$target_dir" "$dist_path"

echo mv "$dist_path"  "$deploy_path$target_dir-$DATE"
echo mv "$deploy_path$target_dir" "$dist_path"
echo "deployment finished!"
