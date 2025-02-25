require 'json'

package = JSON.parse(File.read(File.join(__dir__, 'package.json')))

Pod::Spec.new do |s|
  s.name         = package['iosPackageName']
  s.version      = package['version']
  s.summary      = package['description']
  s.license      = package['license']

  s.authors      = package['author']
  s.homepage     = package['homepage']
  s.platforms    = { :ios => min_ios_version_supported }

  s.source       = { :git => "https://github.com/Usercentrics/usercentrics-react-native.git", :tag => "v#{s.version}" }
  s.source_files = "ios/**/*.{h,m,mm,cpp,swift}"
  s.private_header_files = "ios/generated/**/*.h"

  s.dependency 'UsercentricsUI', "#{package['iosPackageVersion']}"
  install_modules_dependencies(s)

end
