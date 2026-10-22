# Деплой

Сайт: https://new.denisenkosergey.ru (сервер denisenkosergey.ru, Ubuntu 22.04, nginx 1.18).

```bash
PATH=~/.nvm/versions/node/v22.23.2/bin:$PATH ./deploy/deploy.sh
```

- Файлы сайта: `/var/www/vcard`.
- nginx: `/etc/nginx/sites-available/vcard` (копия с сервера — `deploy/nginx/vcard.conf`,
  вместе с блоками SSL и редиректом, которые добавил certbot).
- SSL: Let's Encrypt через certbot. Автопродление — systemd-таймер `snap.certbot.renew.timer`.
  Проверка: `certbot renew --dry-run`.
