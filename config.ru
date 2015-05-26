require 'rack/contrib/try_static'

use Rack::Deflater
use Rack::TryStatic, :root => "build", :urls => %w[/], :try => ['.html', 'index.html', '/index.html']
