# Деплой

Сайт: https://denisenkosergey.ru (сервер denisenkosergey.ru, Ubuntu 22.04, nginx 1.18).
`www.denisenkosergey.ru` и прежний адрес `new.denisenkosergey.ru` перенаправляют на основной домен.
Старый сайт-резюме доступен на https://old.denisenkosergey.ru.

```bash
PATH=~/.nvm/versions/node/v22.23.2/bin:$PATH ./deploy/deploy.sh
```

- Файлы сайта: `/var/www/vcard`. Старый сайт и Curveball: `/var/www/html`
  (`/curveball/` на основном домене отдаётся оттуда же).
- nginx: копии конфигов с сервера лежат в `deploy/nginx/`:
  - `vcard.conf` → `/etc/nginx/sites-available/vcard` — основной домен, www и new;
  - `old.conf` → `/etc/nginx/sites-available/old` — старый сайт;
  - `default.conf` → `/etc/nginx/sites-available/default` — сервер по умолчанию на 80 порту.
- SSL: Let's Encrypt, сертификаты выпущены `certbot certonly --nginx`, поэтому certbot конфиги не правит.
  Конфиги меняются только здесь и копируются на сервер, затем `nginx -t && systemctl reload nginx`.
  Автопродление — systemd-таймер `snap.certbot.renew.timer`. Проверка: `certbot renew --dry-run`.
- Сертификаты: `denisenkosergey.ru` (с www), `new.denisenkosergey.ru`, `old.denisenkosergey.ru`.
