#!/usr/bin/env python3
import os

redirect = os.getenv('REDIRECT')

if redirect is None:
    redirect = input('[+] Digite URL de redirecionamento: ')

with open('template/emprestimo/index_temp.html', 'r') as f:
    data = f.read()
    data = data.replace('REDIRECT_URL', redirect)

with open('template/emprestimo/index.html', 'w') as f:
    f.write(data)