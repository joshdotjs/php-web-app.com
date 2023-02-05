<?php

  namespace Database\Seeders;
  
  // use IlluminateDatabase\Console\Seeds\WithoutModelEvents;
  use Illuminate\Database\Seeder;
  use Illuminate\Support\Facades\DB;
  use Illuminate\Support\Facades\Hash;
  
  function seedProducts() {


  // ==============================================

  // Products:

  DB::table('products')->insert([
    'title'         =>  "Vaporfly 2",     
    'sub_title'     =>  "Men's Road Racing Shoes",     
    'body'          =>  "Continue the next evolution of speed with racing shoes designed to help you chase new goals and records. The Nike Vaporfly 2 builds on a model loved by racers everywhere with a redesigned upper that aims to improve comfort and breathability. From a 10K to a marathon, this version maintains the responsive cushioning and secure support of the original to help push you toward your personal best.",     
    'category'      =>  "shoes",     
    'gender'        =>  "men",     
    'price'         =>   26000,
    'price_compare' =>   26000,
    'created_at'    =>  date("Y-m-d H:i:s")
  ]);
  DB::table('products')->insert([
    'title'         =>  "Dri-FIT Slam",     
    'sub_title'     =>  "Women's Tennis Tank",     
    'body'          =>  "Crafted with our most innovative materials, this fitted tank pairs lightweight knit coverage with the breathability of mesh. The result is a statement-making top that will keep you cool and comfortable so you can play your best.",     
    'category'      =>  "clothes",     
    'gender'        =>  "women",     
    'price'         =>   4697,
    'price_compare' =>   6200,
    'created_at'    =>  date("Y-m-d H:i:s")
  ]);
  DB::table('products')->insert([
    'title'         =>  "Infinity React 3",     
    'sub_title'     =>  "Women's Road Running Shoes",     
    'body'          =>  "Celebrate every mile with these festive road runners. With soft and supportive cushioning, the Nike Infinity React 3 is built to help keep you on the run. A wider forefoot and higher foam stacks help shield you from recurring attrition so you can make running a daily habit. The springy responsiveness surprises you too, adding an element of pure speed to 1 of our most tested shoes. Plus, colorful confetti-inspired graphic accents add fresh energy to your run.",     
    'category'      =>  "shoes",     
    'gender'        =>  "women",     
    'price'         =>   16500,
    'price_compare' =>   16500,
    'created_at'    =>  date("Y-m-d H:i:s")
  ]);
  DB::table('products')->insert([
    'title'         =>  "Dri-FIT One",     
    'sub_title'     =>  "Women's Mid-Rise Printed Shorts",     
    'body'          =>  "These shorts are the ones that are down for everything you do—from long walks to HIIT to running errands. Their silky-smooth, ultrasoft woven fabric is balanced with sweat-wicking tech so you have ultimate comfort while feeling dry as you work out. The snug inner layer helps prevent chaffing so you can push yourself with uncompromising coverage.",     
    'category'      =>  "clothes",     
    'gender'        =>  "women",     
    'price'         =>   5200,
    'price_compare' =>   5200,
    'created_at'    =>  date("Y-m-d H:i:s")
  ]);
  DB::table('products')->insert([
    'title'         =>  "Pegasus 38",     
    'sub_title'     =>  "Men's Running Shoes",     
    'body'          =>  "Your workhorse with wings returns. The Nike Air Zoom Pegasus 38 (NFL New Orleans Saints) puts a spring in your step while showing love for your team. Breathable mesh in the upper combines the comfort and durability you want with a wider fit at the toes.",     
    'category'      =>  "shoes",     
    'gender'        =>  "men",     
    'price'         =>   6500,
    'price_compare' =>   13000,
    'created_at'    =>  date("Y-m-d H:i:s")
  ]);
  DB::table('products')->insert([
    'title'         =>  "Sportswear Phoenix Fleece",     
    'sub_title'     =>  "Women's High-Waisted Wide-Leg Sweatpants",     
    'body'          =>  "Rise up and transform your fleece wardrobe with strong cozy vibes. The extra-long, wide leg and hem vents of these Phoenix Fleece pants let you show off your favorite shoes while taller ribbing at the waist and an exaggerated drawcord ensure your look is anything but basic.",     
    'category'      =>  "clothes",     
    'gender'        =>  "women",     
    'price'         =>   7000,
    'price_compare' =>   7000,
    'created_at'    =>  date("Y-m-d H:i:s")
  ]);
  DB::table('products')->insert([
    'title'         =>  "Invincible 2",     
    'sub_title'     =>  "Men's Road Running Shoes",     
    'body'          =>  "The Nike Invincible 2 has the same supersoft feel that lets you feel the potential when your foot hits the pavement. We created the shoe with plenty of snappy responsiveness and incredible support to help keep you feeling secure and competitive. It's 1 of our most tested shoes, still designed for you to stay on the track and away from the sidelines.",     
    'category'      =>  "shoes",     
    'gender'        =>  "men",     
    'price'         =>   10497,
    'price_compare' =>   18000,
    'created_at'    =>  date("Y-m-d H:i:s")
  ]);
  DB::table('products')->insert([
    'title'         =>  "Zegama",     
    'sub_title'     =>  "Men's Trail Running Shoes",     
    'body'          =>  "Navigate the up and downs of uncompromising terrain with the Nike Zegama. Developed with great grip and stability, it has you covered so you can keep climbing and reach greater personal heights when the going gets grimy and gritty. Whether it's a challenging, rocky landscape going uphill or a steep, slick decline down a treacherous trail, feel confident when you decide to off-road it.",     
    'category'      =>  "shoes",     
    'gender'        =>  "men",     
    'price'         =>   16000,
    'price_compare' =>   11197,
    'created_at'    =>  date("Y-m-d H:i:s")
  ]);
  DB::table('products')->insert([
    'title'         =>  "Pegasus 39",     
    'sub_title'     =>  "Men's Road Running Shoes",     
    'body'          =>  "Let the Nike Pegasus 39 help you ascend to new heights. More lightweight up top than the Pegasus 38 and ideal to wear in any season, it has a supportive sensation to help keep your feet contained, while underfoot cushioning and double Zoom Air units (1 more than the Peg 38) give you an extra pop to your step. Your trusted workhorse with wings is back. Time to fly.",     
    'category'      =>  "shoes",     
    'gender'        =>  "men",     
    'price'         =>   10497,
    'price_compare' =>   13900,
    'created_at'    =>  date("Y-m-d H:i:s")
  ]);
  DB::table('products')->insert([
    'title'         =>  "Alphafly 2",     
    'sub_title'     =>  "Men's Road Racing Shoes",     
    'body'          =>  "Once you take a few strides in the Nike Alphafly 2, you’ll never look at your favorite pair of old racing shoes the same. These rocket ships are made to help shave precious time off your personal records without surrendering the foundation you need to go the full distance. A thick, lightweight support system brings comfort and speed together so you can enjoy our greatest energy return yet while you chase your personal bests.",     
    'category'      =>  "shoes",     
    'gender'        =>  "men",     
    'price'         =>   28500,
    'price_compare' =>   28500,
    'created_at'    =>  date("Y-m-d H:i:s")
  ]);
  DB::table('products')->insert([
    'title'         =>  "Pegasus Trail 4",     
    'sub_title'     =>  "Women's Trail Running Shoes",     
    'body'          =>  "It's time to get outside. Running is your daily ritual, taking you from road to trail as you seek out new routes and goals. With a supportive, springy feel, these trail runners can take you there and back again. Underfoot traction helps keep you going over rocky terrain while still providing a smooth ride for the road. Your trusted workhorse with wings is back and ready for an off-road adventure.",     
    'category'      =>  "shoes",     
    'gender'        =>  "women",     
    'price'         =>   14500,
    'price_compare' =>   14500,
    'created_at'    =>  date("Y-m-d H:i:s")
  ]);
  DB::table('products')->insert([
    'title'         =>  "Vaporfly 2",     
    'sub_title'     =>  "Women's Road Racing Shoes",     
    'body'          =>  "Continue the next evolution of speed with a racing shoe made to you help chase new goals and records. It helps improve comfort and breathability with a redesigned upper. From a 10K to a marathon, this model, like the previous version, has the responsive cushioning and secure support to push you towards your personal best.",     
    'category'      =>  "shoes",     
    'gender'        =>  "women",     
    'price'         =>   21297,
    'price_compare' =>   25000,
    'created_at'    =>  date("Y-m-d H:i:s")
  ]);
  DB::table('products')->insert([
    'title'         =>  "Structure 24",     
    'sub_title'     =>  "Women's Road Running Shoes",     
    'body'          =>  "The Nike Structure 24 has you ready to hit the road. We tested hundreds of runners to design the crash pad under your heel that creates a cushioned, smooth transition from heel to toe. Those insights also created an airy upper with breathability right where you need it.",     
    'category'      =>  "shoes",     
    'gender'        =>  "women",     
    'price'         =>   11097,
    'price_compare' =>   13000,
    'created_at'    =>  date("Y-m-d H:i:s")
  ]);
  DB::table('products')->insert([
    'title'         =>  "Zoom Fly 5",     
    'sub_title'     =>  "Women's Road Running Shoes",     
    'body'          =>  "Bridge the gap between your weekend training run and race day in a durable design that can be deployed not just at the starting line of your favorite race, but in the days and months after your conquest. It offers comfort and reliability but with a propulsive sensation that’ll help you feel fast and fresh. That kind of versatility is uncommon in the running arena. But who said you can’t have it all?",     
    'category'      =>  "shoes",     
    'gender'        =>  "women",     
    'price'         =>   13697,
    'price_compare' =>   16000,
    'created_at'    =>  date("Y-m-d H:i:s")
  ]);
  DB::table('products')->insert([
    'title'         =>  "React Infinity 3 By You",     
    'sub_title'     =>  "Custom Women's Road Running Shoes",     
    'body'          =>  "Stay on your feet in a design that’s made to help keep you healthy while catering to your individualistic tastes in the Nike React Infinity Run 3 By You. You’re the creator with the final say, painting and picking from an extensive pallet of colors and exterior details that suite your distinctive style. Customize it to your liking and feel hopeful about endless possibilities when you hit the open road.",     
    'category'      =>  "shoes",     
    'gender'        =>  "women",     
    'price'         =>   19000,
    'price_compare' =>   19000,
    'created_at'    =>  date("Y-m-d H:i:s")
  ]);
  DB::table('products')->insert([
    'title'         =>  "Dri-FIT Element",     
    'sub_title'     =>  "Women's Running Crew",     
    'body'          =>  "The Nike Dri-FIT Element Crew returns with an updated design. An all-new sleeve features a window that lets you easily check your watch. This product is made with at least 75% recycled polyester fibers.",     
    'category'      =>  "clothes",     
    'gender'        =>  "women",     
    'price'         =>   6000,
    'price_compare' =>   6000,
    'created_at'    =>  date("Y-m-d H:i:s")
  ]);
  DB::table('products')->insert([
    'title'         =>  "Nike Swoosh",     
    'sub_title'     =>  "Women's Sports Bra",     
    'body'          =>  "With wide, comfy straps in a classic racerback design, the Nike Swoosh Sports Bra feels snug and secure while you move. Smooth, lightweight fabric wicks sweat to keep you dry, comfortable and focused. For every rep, step and jump—know that you’re supported.",     
    'category'      =>  "clothes",     
    'gender'        =>  "women",     
    'price'         =>   3500,
    'price_compare' =>   3500,
    'created_at'    =>  date("Y-m-d H:i:s")
  ]);
  DB::table('products')->insert([
    'title'         =>  "Nike Sportswear",     
    'sub_title'     =>  "Women's T-Shirt",     
    'body'          =>  "Deciding on what to wear has never been easier with this roomy tee. Whether you're wearing it alone or tucked under your favorite jacket, this soft cotton basic is sure to become an everyday favorite.",     
    'category'      =>  "clothes",     
    'gender'        =>  "women",     
    'price'         =>   3000,
    'price_compare' =>   3000,
    'created_at'    =>  date("Y-m-d H:i:s")
  ]);
  DB::table('products')->insert([
    'title'         =>  "ACG Oregon Series",     
    'sub_title'     =>  "Men's Cargo Pants",     
    'body'          =>  "Tapping into the iconic ACG Oregon Series from 2002, these cargo pants follow the original design lines for that authentic, trail-ready look and feel. They're made with durable woven fabric, and a reinforced seat to help them withstand your most rugged adventures. Multi-purpose cargo pockets give you secure space to store your hiking essentials and the integrated belt helps you find a comfy fit for the long haul.",     
    'category'      =>  "clothes",     
    'gender'        =>  "men",     
    'price'         =>   20500,
    'price_compare' =>   20500,
    'created_at'    =>  date("Y-m-d H:i:s")
  ]);
  DB::table('products')->insert([
    'title'         =>  "Therma-FIT",     
    'sub_title'     =>  "Men's Pullover Hoodie",     
    'body'          =>  "Bring the heat to your cold weather workout. In the Therma-FIT Pullover, supersoft fleece keeps the comfort levels high while you take your exercise routine to the next level. A relaxed feel means you can stretch and bench without anything holding you back.",     
    'category'      =>  "clothes",     
    'gender'        =>  "men",     
    'price'         =>   6500,
    'price_compare' =>   6500,
    'created_at'    =>  date("Y-m-d H:i:s")
  ]);
  DB::table('products')->insert([
    'title'         =>  "Dri-FIT DNA",     
    'sub_title'     =>  "Men's Basketball Shorts",     
    'body'          =>  "Take care of the future like you take care of the ball in the Nike Dri-FIT DNA Shorts. Made from at least 75% recycled polyester, they offer light, breathable fabric that's tailored for the game.",     
    'category'      =>  "clothes",     
    'gender'        =>  "men",     
    'price'         =>   5000,
    'price_compare' =>   5000,
    'created_at'    =>  date("Y-m-d H:i:s")
  ]);
  DB::table('products')->insert([
    'title'         =>  "Long Sleeve Essential",     
    'sub_title'     =>  "Men's Long-Sleeve Shirt",     
    'body'          =>  "The Nike Essential Swim Shirt offers sun protection to help guard against UV rays while you're training outdoors. Knit fabric gives this shirt natural stretch for a comfortable fit, while sweat-wicking technology helps to manage moisture.",     
    'category'      =>  "clothes",     
    'gender'        =>  "men",     
    'price'         =>   4400,
    'price_compare' =>   4400,
    'created_at'    =>  date("Y-m-d H:i:s")
  ]);
  DB::table('products')->insert([
    'title'         =>  "Sportswear Windrunner",     
    'sub_title'     =>  "Men's Hooded Jacket",     
    'body'          =>  "The Nike Sportswear Windrunner Jacket updates our first running windbreaker with lightweight fabric made from recycled materials. Design details pulled from the original version provide a heritage Nike look. This product is made with 100% recycled polyester fibers.",     
    'category'      =>  "clothes",     
    'gender'        =>  "men",     
    'price'         =>   7597,
    'price_compare' =>   10000,
    'created_at'    =>  date("Y-m-d H:i:s")
  ]);
  DB::table('products')->insert([
    'title'         =>  "Nike Hat",     
    'sub_title'     =>  "Adjustable Cap",     
    'body'          =>  "Classic and comfortable, the Nike Sportswear Heritage 86 Cap features a 6-panel design made from cotton twill fabric and an adjustable closure for a snug, secure fit.",     
    'category'      =>  "accessories",     
    'gender'        =>  "unisex",     
    'price'         =>   2400,
    'price_compare' =>   2400,
    'created_at'    =>  date("Y-m-d H:i:s")
  ]);
  DB::table('products')->insert([
    'title'         =>  "Utility Speed Backpack",     
    'sub_title'     =>  "Training Backpack (27L)",     
    'body'          =>  "The Nike Utility Speed Backpack keeps your gear close, secure and organized when commuting to and from training sessions. Cushioned straps give you comfort on the go, and the pack opens flat for easy access to must-have items.",     
    'category'      =>  "accessories",     
    'gender'        =>  "men",     
    'price'         =>   7700,
    'price_compare' =>   7700,
    'created_at'    =>  date("Y-m-d H:i:s")
  ]);
  DB::table('products')->insert([
    'title'         =>  "G-Flex Belt",     
    'sub_title'     =>  "Golf Belt",     
    'body'          =>  "The Tiger Woods Golf Belt offers a classic, clean-cut look for your day on the green. Nike Hole Reinforcer technology helps protect belt holes from wear and tear, while Nike Ultralight technology provides lightweight feel and full range of motion.",     
    'category'      =>  "accessories",     
    'gender'        =>  "unisex",     
    'price'         =>   7500,
    'price_compare' =>   7500,
    'created_at'    =>  date("Y-m-d H:i:s")
  ]);
  DB::table('products')->insert([
    'title'         =>  "Essential Horizon Glasses",     
    'sub_title'     =>  "Blue Light Glasses",     
    'body'          =>  "Sometimes it's hard to pull yourself away from the screen. The Nike Blue Light Collection features a premium lens coating that helps reduce blue light exposure for use at home, office, and gaming on your digital devices.",     
    'category'      =>  "accessories",     
    'gender'        =>  "women",     
    'price'         =>   9900,
    'price_compare' =>   9900,
    'created_at'    =>  date("Y-m-d H:i:s")
  ]);
  DB::table('products')->insert([
    'title'         =>  "Maverick Polarized Glasses",     
    'sub_title'     =>  "Golf Sunglasses",     
    'body'          =>  "A rebel on the outside, the Nike Maverick Sunglasses are pure performance on the inside. The lightweight frame features ventilation and temple arms that provide a soft, firm grip, ensuring you can wear these sunglasses for hours on the course, and off.",     
    'category'      =>  "accessories",     
    'gender'        =>  "unisex",     
    'price'         =>   19900,
    'price_compare' =>   19900,
    'created_at'    =>  date("Y-m-d H:i:s")
  ]);
  DB::table('products')->insert([
    'title'         =>  "Tennis Bag",     
    'sub_title'     =>  "Stash Duffel Bag",     
    'body'          =>  "Serena doesn't shy away from being bold and daring with her style, and neither do you. The Serena Williams Design Crew Stash Duffel is as fun as it is functional—a main compartment creates plenty of space for your gear from the court to the gym and everything else life throws your way. Need some space? The front zippered pocket provides secure small-item storage and turns inside out to store the bag easily when not in use.",     
    'category'      =>  "accessories",     
    'gender'        =>  "women",     
    'price'         =>   4900,
    'price_compare' =>   4900,
    'created_at'    =>  date("Y-m-d H:i:s")
  ]);
  DB::table('products')->insert([
    'title'         =>  "Sportswear Essentials Bag",     
    'sub_title'     =>  "Crossbody Bag",     
    'body'          =>  "The Nike Sportswear Essentials Crossbody Bag features 2 zippered pockets to let you keep the small stuff organized and easy to grab. The accessory pocket zipper pull offers quick access to smaller items, while an adjustable strap and buckle provide an easy on and off fit. This product is made with at least 50% recycled polyester fibers.",     
    'category'      =>  "accessories",     
    'gender'        =>  "unisex",     
    'price'         =>   3200,
    'price_compare' =>   3200,
    'created_at'    =>  date("Y-m-d H:i:s")
  ]);
  DB::table('products')->insert([
    'title'         =>  "Invincible 3",     
    'sub_title'     =>  "Women's Road Running Shoes",     
    'body'          =>  "With maximum cushioning to support every mile, the Invincible 3 gives you our highest level of comfort underfoot to help you stay on your feet today, tomorrow and beyond. Designed to help keep you on the run, it’s super springy and bouncy, so that you can propel down your preferred path and come back for your next run feeling ready and reinvigorated.",     
    'category'      =>  "shoes",     
    'gender'        =>  "women",     
    'price'         =>   18000,
    'price_compare' =>   18000,
    'created_at'    =>  date("Y-m-d H:i:s")
  ]);
  DB::table('products')->insert([
    'title'         =>  "Vomero 16",     
    'sub_title'     =>  "Women's Road Running Shoes",     
    'body'          =>  "The Vomero 16 adds responsive ZoomX foam cushioning, bringing an energetic pop to your stride that’s perfect for high mileage on the road. It’s super lightweight, with plenty of stretch and ventilation through the upper. Looking for the right amount of support? We’ve got you covered with an adjustable midfoot band and a stable clip at the heel.",     
    'category'      =>  "shoes",     
    'gender'        =>  "women",     
    'price'         =>   16000,
    'price_compare' =>   16000,
    'created_at'    =>  date("Y-m-d H:i:s")
  ]);
  DB::table('products')->insert([
    'title'         =>  "Downshifter 12",     
    'sub_title'     =>  "Women's Road Running Shoes",     
    'body'          =>  "Take those first steps on you running journey in the Nike Downshifter 12. It's got a supportive fit and a stable ride, with a lightweight feel that easily transitions from your workout to hanging out. This one continues our sustainability journey with a design made from at least 20% recycled content by weight. Your trek begins. Lace up and hit the road.",     
    'category'      =>  "shoes",     
    'gender'        =>  "women",     
    'price'         =>   7000,
    'price_compare' =>   7000,
    'created_at'    =>  date("Y-m-d H:i:s")
  ]);
  DB::table('products')->insert([
    'title'         =>  "Renew Ride 3",     
    'sub_title'     =>  "Women's Road Running Shoes",     
    'body'          =>  "When everyday runs are on the menu, the Nike Renew Ride 3 Premium comes through with a smooth and soft ride. It has a secure fit and cozy feel, geared for those looking to find their running potential, while a subtle wink at the tongue reminds you to find the fun on your route. It's so comfortable, you'll want to keep wearing it throughout your day.",     
    'category'      =>  "shoes",     
    'gender'        =>  "women",     
    'price'         =>   5697,
    'price_compare' =>   8000,
    'created_at'    =>  date("Y-m-d H:i:s")
  ]);
  DB::table('products')->insert([
    'title'         =>  "Zoom Fly 5",     
    'sub_title'     =>  "Men's Running Shoes",     
    'body'          =>  "Bridge the gap between your weekend training run and race day with a durable design that feels just as at home on the starting line as it does on your regular route. ZoomX foam and a carbon-fiber plate help the Nike Zoom Fly 5 offer comfort and reliability alongside a responsive propulsive sensation that’ll help you feel fast and fresh. That kind of versatility is uncommon in the running arena. But who said you can’t have it all?",     
    'category'      =>  "shoes",     
    'gender'        =>  "men",     
    'price'         =>   17000,
    'price_compare' =>   17000,
    'created_at'    =>  date("Y-m-d H:i:s")
  ]);
  DB::table('products')->insert([
    'title'         =>  "Revolution 5",     
    'sub_title'     =>  "Men's Road Running Shoes",     
    'body'          =>  "When the road beckons, answer the call in a lightweight pair that’ll keep you moving mile after mile. Soft foam cushions your stride, and a reinforced heel delivers a smooth, stable ride. Crafted with knit material for breathable support, while a minimalist design fits in just about anywhere your day takes you.",     
    'category'      =>  "shoes",     
    'gender'        =>  "men ",     
    'price'         =>   4497,
    'price_compare' =>   6500,
    'created_at'    =>  date("Y-m-d H:i:s")
  ]);
  DB::table('products')->insert([
    'title'         =>  "Terra 7",     
    'sub_title'     =>  "Men's Trail Running Shoes",     
    'body'          =>  "Run the trail in a super responsive running shoe. Fast and lightweight, it delivers a breathable and secure feel as you race over rocky paths. Updated traction lugs provide stability for your downhill miles.",     
    'category'      =>  "shoes",     
    'gender'        =>  "men",     
    'price'         =>   9797,
    'price_compare' =>   14000,
    'created_at'    =>  date("Y-m-d H:i:s")
  ]);
  DB::table('products')->insert([
    'title'         =>  "Infinity React 3 Premium",     
    'sub_title'     =>  "Men's Road Running Shoes",     
    'body'          =>  "With soft and supportive cushioning, built to help keep you on the run, the Infinity React 3 is here to help get you moving Regardless of whether your pace is snail-like or lickety-split, it helps keep you on the go. Expressive, playful graphics remind you fun can be found in every stride, even when those heavy miles won’t run themselves. So go ahead, put 1 foot in front of the other, we’ve got you.",     
    'category'      =>  "shoes",     
    'gender'        =>  "men",     
    'price'         =>   17000,
    'price_compare' =>   17000,
    'created_at'    =>  date("Y-m-d H:i:s")
  ]);
  DB::table('products')->insert([
    'title'         =>  "Nike Winflo 9 Premium",     
    'sub_title'     =>  "Men's Road Running Shoes",     
    'body'          =>  "Featuring a balanced ride to help kickstart your run, the Winflo 9 is here to help get you moving. Regardless of whether your pace is snail-like or lickety-split, this special version will help keep you on the go. Nike Air and soft, springy foam work with expressive, playful graphics to remind you fun can be found in every stride, even when those heavy miles won’t run themselves. So go ahead, put 1 foot in front of the other. We’ve got you.",     
    'category'      =>  "shoes",     
    'gender'        =>  "men",     
    'price'         =>   11000,
    'price_compare' =>   11000,
    'created_at'    =>  date("Y-m-d H:i:s")
  ]);
  DB::table('products')->insert([
    'title'         =>  "React Infinity 3",     
    'sub_title'     =>  "Men's Road Running Shoes",     
    'body'          =>  "Still 1 of our most tested shoes, the Nike React Infinity 3 has soft and supportive cushioning. Its soft, stable feel with a smooth ride will carry you through routes, long and short. A breathable upper is made to feel contained, yet flexible. We even added more cushioning around the heel and ankle for a supportive sensation. Keep running, we've got you.",     
    'category'      =>  "shoes",     
    'gender'        =>  "men",     
    'price'         =>   16000,
    'price_compare' =>   16000,
    'created_at'    =>  date("Y-m-d H:i:s")
  ]);
  DB::table('products')->insert([
    'title'         =>  "Wildhorse 7",     
    'sub_title'     =>  "Men's Trail Running Shoes",     
    'body'          =>  "Take on those tough and extreme trail runs with the rugged build of the Nike Wildhorse 7. Confidently take on rocky terrain with high-abrasion rubber on the outsole that adds durable traction. The upper delivers durable ventilation with support where you need it. Foam midsole cushioning gives a neutral feel and provides responsiveness on every mile.",     
    'category'      =>  "shoes",     
    'gender'        =>  "men",     
    'price'         =>   8997,
    'price_compare' =>   13000,
    'created_at'    =>  date("Y-m-d H:i:s")
  ]);
  DB::table('products')->insert([
    'title'         =>  "React Miler 3",     
    'sub_title'     =>  "Men's Road Running Shoes",     
    'body'          =>  "Cushioned and comfortable, just like every run should feel. The Nike React Miler 3 gives you a soft and smooth ride as your feet hit the pavement. We added stability at the heel for a secure sensation, while durable traction helps keep you going on runs long and short.",     
    'category'      =>  "shoes",     
    'gender'        =>  "men",     
    'price'         =>   7197,
    'price_compare' =>   12000,
    'created_at'    =>  date("Y-m-d H:i:s")
  ]);
  DB::table('products')->insert([
    'title'         =>  "Air Zoom Rival Fly 3",     
    'sub_title'     =>  "Men's Road Racing Shoes",     
    'body'          =>  "Are you ready to ramp up the speed and go the distance? Built for training and racing, the Nike Air Zoom Rival Fly 3 features soft foam and durable abrasion-resistant rubber to help you conquer even the rockiest of roads. Plus, Nike Zoom Air provides a snappy feel as you push toward the finish line.",     
    'category'      =>  "shoes",     
    'gender'        =>  "men",     
    'price'         =>   10000,
    'price_compare' =>   10000,
    'created_at'    =>  date("Y-m-d H:i:s")
  ]);
  DB::table('products')->insert([
    'title'         =>  "Vomero 16",     
    'sub_title'     =>  "Men's Road Running Shoes",     
    'body'          =>  "The Vomero 16 adds responsive ZoomX foam cushioning, bringing an energetic pop to your stride that’s perfect for high mileage on the road. It’s super lightweight, with plenty of stretch and ventilation through the upper. Looking for the right amount of support? We’ve got you covered with an adjustable midfoot band and a stable clip at the heel.",     
    'category'      =>  "shoes",     
    'gender'        =>  "men",     
    'price'         =>   15000,
    'price_compare' =>   15000,
    'created_at'    =>  date("Y-m-d H:i:s")
  ]);
  DB::table('products')->insert([
    'title'         =>  "Air Max 90",     
    'sub_title'     =>  "Women's Shoes",     
    'body'          =>  "Lace up and feel the legacy. Produced at the intersection of art, music and culture, this champion running shoe helped define the ‘90s. Worn by presidents, revolutionized through collabs and celebrated through rare colorways, its striking visuals and exposed Nike Air keep it alive and well.",     
    'category'      =>  "shoes",     
    'gender'        =>  "women",     
    'price'         =>   13000,
    'price_compare' =>   13000,
    'created_at'    =>  date("Y-m-d H:i:s")
  ]);
  DB::table('products')->insert([
    'title'         =>  "Air Max 270",     
    'sub_title'     =>  "Women's Shoes",     
    'body'          =>  "Put a bounce in your step with the Nike Air Max 270. An extra-large Max Air unit wraps around the heel to cushion your every step, leaving you feeling like you’re walking on Air. The stretchy inner sleeve provides a sock-like fit for comfort that lasts. Pops of fresh colors sprinkled throughout add bright style to your day.",     
    'category'      =>  "shoes",     
    'gender'        =>  "women",     
    'price'         =>   16000,
    'price_compare' =>   16000,
    'created_at'    =>  date("Y-m-d H:i:s")
  ]);
  DB::table('products')->insert([
    'title'         =>  "Repel Miler",     
    'sub_title'     =>  "Men's Running Jacket",     
    'body'          =>  "An essential piece to your running game gets an update on the Nike Repel Miler Jacket. It's built to take on wet weather with a water-repellent design and a hood. The packable design features a look steeped in Nike's heritage. This product is made with 100% recycled polyester fibers.",     
    'category'      =>  "clothes",     
    'gender'        =>  "men",     
    'price'         =>   9000,
    'price_compare' =>   9000,
    'created_at'    =>  date("Y-m-d H:i:s")
  ]);
  DB::table('products')->insert([
    'title'         =>  "Nike Sportswear",     
    'sub_title'     =>  "Faux Fur Blanket",     
    'body'          =>  "Celebrate the seasonal shift of weather by bundling up in this blanket. Made of the coziest faux fur fleece, this statement piece does double-duty as oversized layering piece or softest spot on your couch.",     
    'category'      =>  "accessories",     
    'gender'        =>  "unisex",     
    'price'         =>   17097,
    'price_compare' =>   20000,
    'created_at'    =>  date("Y-m-d H:i:s")
  ]);
  DB::table('products')->insert([
    'title'         =>  "Flex Experience Run 11 Next Nature",     
    'sub_title'     =>  "Men's Road Running Shoes",     
    'body'          =>  "Comfortably zen, just like every run should be. With the Nike Flex Experience Run 11 Next Nature, we created a lightweight, clean design that feels as good as it looks. The shoes are supportive in all the right ways with movement so natural, you'll swear you've been wearing them for years.",     
    'category'      =>  "shoes",     
    'gender'        =>  "men",     
    'price'         =>   4197,
    'price_compare' =>   7000,
    'created_at'    =>  date("Y-m-d H:i:s")
  ]);

  // ==============================================

  // Variants:

  DB::table('variants')->insert([
    'product_id'  =>  1,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "blue",     
    'img'         =>  "/img/products/shoes/men/Vaporfly-2-1.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  1,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "green",     
    'img'         =>  "/img/products/shoes/men/Vaporfly-2-2.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  1,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "white",     
    'img'         =>  "/img/products/shoes/men/Vaporfly-2-3.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  1,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "grey",     
    'img'         =>  "/img/products/shoes/men/Vaporfly-2-4.jpeg",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  1,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "",     
    'img'         =>  "",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  1,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "",     
    'img'         =>  "",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  1,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "",     
    'img'         =>  "",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  1,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "",     
    'img'         =>  "",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  2,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "white",     
    'img'         =>  "/img/products/clothes/women/Dri-FIT-Slam-white.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  2,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "blue",     
    'img'         =>  "/img/products/clothes/women/Dri-FIT-Slam-blue.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  2,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "pink",     
    'img'         =>  "/img/products/clothes/women/Dri-FIT-Slam-pink.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  3,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "purple",     
    'img'         =>  "/img/products/shoes/women/Infinity-React-3-purple.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  3,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "pink",     
    'img'         =>  "/img/products/shoes/women/Infinity-React-3-pink.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  3,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "grey",     
    'img'         =>  "/img/products/shoes/women/Infinity-React-3-grey.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  3,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "white",     
    'img'         =>  "/img/products/shoes/women/Infinity-React-3-white.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  4,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "blue",     
    'img'         =>  "/img/products/clothes/women/Dri-FIT-One-blue.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  4,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "pink",     
    'img'         =>  "/img/products/clothes/women/Dri-FIT-One-pink.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  4,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "",     
    'img'         =>  "",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  4,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "",     
    'img'         =>  "",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  5,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "grey",     
    'img'         =>  "/img/products/shoes/men/Pegasus-38-3.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  5,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "red",     
    'img'         =>  "/img/products/shoes/men/Pegasus-38-2.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  5,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "grey",     
    'img'         =>  "/img/products/shoes/men/Pegasus-38-1.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  5,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "black",     
    'img'         =>  "/img/products/shoes/men/Pegasus-38-4.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  6,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "brown",     
    'img'         =>  "/img/products/clothes/women/Sportswear-Phoenix-Fleece-brown.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  6,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "red",     
    'img'         =>  "/img/products/clothes/women/Sportswear-Phoenix-Fleece-red.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  7,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "orange",     
    'img'         =>  "/img/products/shoes/men/invincible-2-orange.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  7,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "grey",     
    'img'         =>  "/img/products/shoes/men/invincible-2-grey.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  7,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "pink",     
    'img'         =>  "/img/products/shoes/men/invincible-2-pink.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  7,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "black",     
    'img'         =>  "/img/products/shoes/men/invincible-2-black.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  8,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "blue",     
    'img'         =>  "/img/products/shoes/men/Zegama-1.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  8,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "green",     
    'img'         =>  "/img/products/shoes/men/Zegama-2.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  9,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "white",     
    'img'         =>  "/img/products/shoes/men/pegasus-39-white.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  9,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "green",     
    'img'         =>  "/img/products/shoes/men/pegasus-39-green.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  9,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "pink",     
    'img'         =>  "/img/products/shoes/men/pegasus-39-pink.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  9,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "purple",     
    'img'         =>  "/img/products/shoes/men/pegasus-39-purple.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  9,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "",     
    'img'         =>  "",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  9,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "",     
    'img'         =>  "",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  9,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "",     
    'img'         =>  "",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  9,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "",     
    'img'         =>  "",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  10,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "green",     
    'img'         =>  "/img/products/shoes/men/alphafly-2-green.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  10,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "orange",     
    'img'         =>  "/img/products/shoes/men/alphafly-2-orange.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  11,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "pink",     
    'img'         =>  "/img/products/shoes/women/Pegasus-Trail-4-pink.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  11,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "purple",     
    'img'         =>  "/img/products/shoes/women/Pegasus-Trail-4-purple.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  11,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "red",     
    'img'         =>  "/img/products/shoes/women/Pegasus-Trail-4-red.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  11,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "brown",     
    'img'         =>  "/img/products/shoes/women/Pegasus-Trail-4-brown.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  12,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "orange",     
    'img'         =>  "/img/products/shoes/women/vaporfly-2-1.avif",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  12,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "black",     
    'img'         =>  "/img/products/shoes/women/vaporfly-2-2.jpeg",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  12,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "pink",     
    'img'         =>  "/img/products/shoes/women/vaporfly-2-3.jpeg",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  12,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "yellow",     
    'img'         =>  "/img/products/shoes/women/vaporfly-2-4.jpeg",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  13,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "white",     
    'img'         =>  "/img/products/shoes/women/Structure-24-white.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  13,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "pink",     
    'img'         =>  "/img/products/shoes/women/Structure-24-pink.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  13,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "pink",     
    'img'         =>  "/img/products/shoes/women/Structure-24-pink-2.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  13,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "black",     
    'img'         =>  "/img/products/shoes/women/Structure-24-black.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  14,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "purple",     
    'img'         =>  "/img/products/shoes/women/Zoom-Fly-5-purple.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  14,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "green",     
    'img'         =>  "/img/products/shoes/women/Zoom-Fly-5-green.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  14,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "pink",     
    'img'         =>  "/img/products/shoes/women/Zoom-Fly-5-pink.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  14,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "black",     
    'img'         =>  "/img/products/shoes/women/Zoom-Fly-5-black.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  15,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "white",     
    'img'         =>  "/img/products/shoes/women/React-Infinity-3 By-You-white.jpeg",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  15,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "pink",     
    'img'         =>  "/img/products/shoes/women/React-Infinity-3 By-You-pink.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  15,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "red",     
    'img'         =>  "/img/products/shoes/women/React-Infinity-3 By-You-red.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  15,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "black",     
    'img'         =>  "/img/products/shoes/women/React-Infinity-3 By-You-black.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  16,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "yellow",     
    'img'         =>  "/img/products/clothes/women/Dri-FIT-Element-yellow.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  16,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "grey",     
    'img'         =>  "/img/products/clothes/women/Dri-FIT-Element-grey.jpeg",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  16,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "black",     
    'img'         =>  "/img/products/clothes/women/Dri-FIT-Element-black.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  16,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "black",     
    'img'         =>  "/img/products/clothes/women/Dri-FIT-Element-black-2.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  17,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "yellow",     
    'img'         =>  "/img/products/clothes/women/Nike-Swoosh-yellow.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  17,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "green",     
    'img'         =>  "/img/products/clothes/women/Nike-Swoosh-green.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  17,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "pink",     
    'img'         =>  "/img/products/clothes/women/Nike-Swoosh-pink.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  17,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "",     
    'img'         =>  "",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  17,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "",     
    'img'         =>  "",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  17,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "",     
    'img'         =>  "",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  17,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "",     
    'img'         =>  "",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  18,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "pink",     
    'img'         =>  "/img/products/clothes/women/Nike-Sportswear-pink.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  18,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "white",     
    'img'         =>  "/img/products/clothes/women/Nike-Sportswear-white.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  18,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "",     
    'img'         =>  "",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  18,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "",     
    'img'         =>  "",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  18,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "",     
    'img'         =>  "",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  19,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "green",     
    'img'         =>  "/img/products/clothes/men/cargo-pants-green.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  20,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "purple",     
    'img'         =>  "/img/products/clothes/men/themal-fit-hoodie-purple.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  20,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "red",     
    'img'         =>  "/img/products/clothes/men/themal-fit-hoodie-red.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  20,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "blue",     
    'img'         =>  "/img/products/clothes/men/themal-fit-hoodie-blue.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  20,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "grey",     
    'img'         =>  "/img/products/clothes/men/themal-fit-hoodie-grey.jpeg",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  21,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "blue",     
    'img'         =>  "/img/products/clothes/men/Dri-FIT-DNA-shorts-blue.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  21,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "grey",     
    'img'         =>  "/img/products/clothes/men/Dri-FIT-DNA-shorts-grey.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  21,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "red",     
    'img'         =>  "/img/products/clothes/men/Dri-FIT-DNA-shorts-red.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  22,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "grey",     
    'img'         =>  "/img/products/clothes/men/long-sleeve-essential-grey.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  22,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "white",     
    'img'         =>  "/img/products/clothes/men/long-sleeve-essential-white.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  22,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "black",     
    'img'         =>  "/img/products/clothes/men/long-sleeve-essential-black.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  23,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "green",     
    'img'         =>  "/img/products/clothes/men/Sportswear-Windrunner-green.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  23,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "black",     
    'img'         =>  "/img/products/clothes/men/Sportswear-Windrunner-black.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  23,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "blue",     
    'img'         =>  "/img/products/clothes/men/Sportswear-Windrunner-blue.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  23,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "red",     
    'img'         =>  "/img/products/clothes/men/Sportswear-Windrunner-red.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  24,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "blue",     
    'img'         =>  "/img/products/accessories/unisex/nike-hat-blue.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  24,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "black",     
    'img'         =>  "/img/products/accessories/unisex/nike-hat-black.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  24,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "brown",     
    'img'         =>  "/img/products/accessories/unisex/nike-hat-brown.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  24,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "white",     
    'img'         =>  "/img/products/accessories/unisex/nike-hat-white.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  25,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "black",     
    'img'         =>  "/img/products/accessories/men/backpack.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  26,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "black",     
    'img'         =>  "/img/products/accessories/unisex/belt-g-flex-black.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  26,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "white",     
    'img'         =>  "/img/products/accessories/unisex/belt-g-flex-white.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  27,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "pink",     
    'img'         =>  "/img/products/accessories/women/Essential-Horizon-pink.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  27,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "white",     
    'img'         =>  "/img/products/accessories/women/Essential-Horizon-white.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  27,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "black",     
    'img'         =>  "/img/products/accessories/women/Essential-Horizon-black.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  28,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "blue",     
    'img'         =>  "/img/products/accessories/unisex/Maverick-Polarized-Glasses-blue.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  28,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "red",     
    'img'         =>  "/img/products/accessories/unisex/Maverick-Polarized-Glasses-red.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  28,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "black",     
    'img'         =>  "/img/products/accessories/unisex/Maverick-Polarized-Glasses-black.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  29,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "white",     
    'img'         =>  "/img/products/accessories/unisex/tennis-bag-white.jpeg",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  30,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "black",     
    'img'         =>  "/img/products/accessories/unisex/Sportswear-Essentials-Bag-black.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  30,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "blue",     
    'img'         =>  "/img/products/accessories/unisex/Sportswear-Essentials-Bag-blue.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  30,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "white",     
    'img'         =>  "/img/products/accessories/unisex/Sportswear-Essentials-Bag-white.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  31,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "pink",     
    'img'         =>  "/img/products/shoes/women/Invincible-3-pink.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  31,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "grey",     
    'img'         =>  "/img/products/shoes/women/Invincible-3-grey.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  31,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "black",     
    'img'         =>  "/img/products/shoes/women/Invincible-3-black.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  31,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "black",     
    'img'         =>  "/img/products/shoes/women/Invincible-3-black-2.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  32,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "pink",     
    'img'         =>  "/img/products/shoes/women/Vomero-16-pink.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  32,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "black",     
    'img'         =>  "/img/products/shoes/women/Vomero-16-black.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  33,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "pink",     
    'img'         =>  "/img/products/shoes/women/Downshifter-12-pink.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  33,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "white",     
    'img'         =>  "/img/products/shoes/women/Downshifter-12-white.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  34,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "white",     
    'img'         =>  "/img/products/shoes/women/Renew-Ride-3-white.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  34,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "pink",     
    'img'         =>  "/img/products/shoes/women/Renew-Ride-3-pink.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  34,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "green",     
    'img'         =>  "/img/products/shoes/women/Renew-Ride-3-green.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  35,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "green",     
    'img'         =>  "/img/products/shoes/men/Zoom-Fly-5-green.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  35,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "black",     
    'img'         =>  "/img/products/shoes/men/Zoom-Fly-5-black.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  36,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "grey",     
    'img'         =>  "/img/products/shoes/men/Nike-Revolution-5-grey.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  37,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "orange",     
    'img'         =>  "/img/products/shoes/men/Terra-7-orange.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  38,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "brown",     
    'img'         =>  "/img/products/shoes/men/Infinity-React-3-Premium.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  39,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "white",     
    'img'         =>  "/img/products/shoes/men/Nike-Winflo-9-Premium.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  40,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "brown",     
    'img'         =>  "/img/products/shoes/men/React-Infinity-3-brown.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  40,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "grey",     
    'img'         =>  "/img/products/shoes/men/React-Infinity-3-grey.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  40,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "black",     
    'img'         =>  "/img/products/shoes/men/React-Infinity-3-black.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  41,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "grey",     
    'img'         =>  "/img/products/shoes/men/Wildhorse-7-grey.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  41,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "black",     
    'img'         =>  "/img/products/shoes/men/Wildhorse-7-black.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  42,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "green",     
    'img'         =>  "/img/products/shoes/men/React-Miler-3-green.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  42,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "black",     
    'img'         =>  "/img/products/shoes/men/React-Miler-3-black.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  43,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "green",     
    'img'         =>  "/img/products/shoes/men/Air-Zoom-Rival-Fly-3-green.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  43,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "blue",     
    'img'         =>  "/img/products/shoes/men/Air-Zoom-Rival-Fly-3-blue.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  43,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "black",     
    'img'         =>  "/img/products/shoes/men/Air-Zoom-Rival-Fly-3-black.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  44,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "grey",     
    'img'         =>  "/img/products/shoes/men/Vomero-16-grey.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  44,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "blue",     
    'img'         =>  "/img/products/shoes/men/Vomero-16-blue.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  45,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "white",     
    'img'         =>  "/img/products/shoes/women/Air-Max-90-white.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  45,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "pink",     
    'img'         =>  "/img/products/shoes/women/Air-Max-90-pink.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  46,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "white",     
    'img'         =>  "/img/products/shoes/women/Nike-Air-Max-270-white.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  46,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "white",     
    'img'         =>  "/img/products/shoes/women/Nike-Air-Max-270-white-2.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  46,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "white",     
    'img'         =>  "/img/products/shoes/women/Nike-Air-Max-270-white-3.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  46,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "purple",     
    'img'         =>  "/img/products/shoes/women/Nike-Air-Max-270-purple.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  47,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "green",     
    'img'         =>  "/img/products/clothes/men/Repel-Miler-1.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  47,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "black",     
    'img'         =>  "/img/products/clothes/men/Repel-Miler-2.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  47,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "grey",     
    'img'         =>  "/img/products/clothes/men/Repel-Miler-3.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  48,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "white",     
    'img'         =>  "/img/products/accessories/unisex/Faux-Fur-Blanket-1.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  48,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "brown",     
    'img'         =>  "/img/products/accessories/unisex/Faux-Fur-Blanket-2.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  48,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "black",     
    'img'         =>  "/img/products/accessories/unisex/Faux-Fur-Blanket-3.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  49,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "grey",     
    'img'         =>  "/img/products/shoes/men/Flex-Experience-Run-11-grey-1.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  49,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "grey",     
    'img'         =>  "/img/products/shoes/men/Flex-Experience-Run-11-grey-2.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  49,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "black",     
    'img'         =>  "/img/products/shoes/men/Flex-Experience-Run-11-black.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  49,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "blue",     
    'img'         =>  "/img/products/shoes/men/Flex-Experience-Run-11-blue.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);

  // ==============================================


}

