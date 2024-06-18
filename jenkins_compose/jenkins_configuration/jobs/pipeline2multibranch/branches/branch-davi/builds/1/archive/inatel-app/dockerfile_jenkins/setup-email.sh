#!/bin/bash

# Configurar msmtp
echo "defaults" > /etc/msmtprc
echo "auth on" >> /etc/msmtprc
echo "tls on" >> /etc/msmtprc
echo "tls_trust_file /etc/ssl/certs/ca-certificates.crt" >> /etc/msmtprc
echo "logfile ~/.msmtp.log" >> /etc/msmtprc

# Configurar conta de email
echo "account default" >> /etc/msmtprc
echo "host smtp.gmail.com" >> /etc/msmtprc
echo "port 587" >> /etc/msmtprc
echo "from ${EMAIL_ADDRESS}" >> /etc/msmtprc
echo "user your-email@gmail.com" >> /etc/msmtprc
echo "password your-password" >> /etc/msmtprc
echo "tls on" >> /etc/msmtprc

chmod 600 /etc/msmtprc
