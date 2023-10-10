# 기본 아이템 이름
- coffee (2,2) / shit_coffee (2,2)
- hair_dryer (1, 1) / shit_barbers_pole (2, 1)
- bottled_car (2, 2) / shit_bottled_car (2, 2)
- snack_shelf (2, 4) / shit_snack_shelf (2, 4)
- coins (2, 2) / shit_coins (2, 2)
- pizza (4, 4) / shit_pizza (4, 4)
- first_aid_kit (2, 4) / shit_first_aid_kit (2, 4)
- red_gear_pc_gaming_controller (2, 2) / shit_red_gear_pc_gaming_controller (2, 2)
- shiba (2, 4) / shit_shiba (2, 5)
- youtube_silver_play_button (2, 1) / shit_youtube_silver_play_button (2, 1)
- shopping_cart (2, 2) / shit_shopping_cart (2, 2)
- luggage (2, 4) / shit_luggage (2, 4)

- IOU (차용증) (1, 2)

# 스킨 아이템 이름
- cute_coffee_cup (2, 2) / shit_cute_coffee_cup (2, 2)
- barbers_pole (2, 2) / shit_hair_dryer  (2, 2)
- porsche_911 (2, 3) / shit_porsche_911 (2, 3)
- vending_machine (5, 4) / shit_vending_machine (5, 4)
- safe (3, 4) / shit_safe (3, 4)
- sculptober_burger (2, 2) / shit_sculptober_burger (2, 2)
- pubg_mobile_first_aid_kit (2, 4) / shit_pubg_mobile_first_aid_kit (2, 4)
- vintage_controller (2, 4) / shit_vintage_controller (2, 4)
- robo_cat (2, 3) / shit_robo_cat (2, 4)
- youtube_gold_play_button (2, 1) / shit_youtube_gold_play_button (2, 1)
- gucci (3, 3) / shit_gucci (3, 4)
- vintage_luggage (2, 4) / shit_vintage_luggage (2, 4)

## shit_ 붙은 것들은 소비내역 초과 시 교체될 assets
## (size_x , size_y) 순, 고정값

# 주고받을 정보들
  {
    "item": {
      "name": "string"
    },
    "category" : {
      "tagId" : shopping
    },
    "position_x": 0,
    "position_y": 0,
    "grid_z_number": 1,
    "rotation": 0
    "size_x": 0,
    "size_y": 0,
    "inRoom" : false,
    "isSkin" : true / false,
    "wall": false,
  }

## 기본값
- name, size는 고정값
- position_x, position_y은 0, grid_z_number은 1
- inRoom : false
- wall : false

- isSkin: asset에 따라서