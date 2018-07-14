# https://blog.csdn.net/abcjennifer/article/details/47757881
# writen by Rachel-Zhang

import sys
import http.server
import socket
import webbrowser

HandlerClass = http.server.SimpleHTTPRequestHandler
ServerClass  = http.server.HTTPServer
Protocol     = "HTTP/1.0"
hostname = socket.gethostbyname(socket.gethostname())
defaultPort  = 8080

try:
  port = int(sys.argv[1], base = 10)
except IndexError:
  port = defaultPort
except ValueError:
  print("invalid input, port has been set to %s" % defaultPort)
  port = defaultPort

server_address = (hostname, port)

HandlerClass.protocol_version = Protocol
httpd = ServerClass(server_address, HandlerClass)

webbrowser.open("http://%s:%s/" % server_address)
# sa = httpd.socket.getsockname()
print("Serving HTTP at %s:%s..." % server_address)
httpd.serve_forever()
