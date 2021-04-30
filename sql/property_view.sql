create view property_view as
select p.*, 
	(select c1.name_en from "location" l join country c1 on c1.country_code = l.country_code where l.id  = p.location_id) as country_name_en,
	(select c1.name_ar from "location" l join country c1 on c1.country_code = l.country_code where l.id  = p.location_id) as country_name_ar,
	(select c2.name_ar from "location" l join city c2 on c2.id = l.city_id where l.id  = p.location_id) as city_name_ar,
	(select c2.name_en from "location" l join city c2 on c2.id = l.city_id where l.id  = p.location_id) as city_name_en,
	(select r.name_ar from "location" l join region r on r.id = l.region_id where l.id  = p.location_id) as region_name_ar,
	(select r.name_en from "location" l join region r on r.id = l.region_id where l.id  = p.location_id) as region_name_en,
	(select a.name_ar from "location" l join area a on a.id = l.region_id where l.id  = p.location_id) as area_name_ar,
	(select a.name_en from "location" l join area a on a.id = l.region_id where l.id  = p.location_id) as area_name_en
from property p;
