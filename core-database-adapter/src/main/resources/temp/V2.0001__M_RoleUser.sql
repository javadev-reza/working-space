ALTER TABLE M_RoleUser;

insert into M_RoleUser (id,statusEnabled,description,roleUser) values(1,true,"-","Super Admin");  --default
insert into M_RoleUser (id,statusEnabled,description,roleUser) values(2,true,"-","Admin");  --default
insert into M_RoleUser (id,statusEnabled,description,roleUser) values(3,true,"-","User");   --web app

ALTER TABLE M_RoleUser;