const app = require("express")()
const cors = require('cors')
const port = 9876

app.use(cors())

function loginResponse() {
  return {user_id: 1, token: "jwttoken"}
}

app.post("/login", (req, res) => {
  res.send(loginResponse())
})

app.post("/register", (req, res) => {
  res.send({otp_secret: "blah"})
})

app.post("/verify_otp", (req, res) => {
  res.send(loginResponse())
})

function userResponse(user_id) {
  // Don't forget to remove password and verifyotp field

  return {
    user_id: user_id,
    email: "dummy@gmail.com",
    username: "dummy",
    mobilephone: "0831111111",
    role_id: 0,
    is_verified: 1,

    create_date: new Date(),
    modified_date: new Date(),

    user_profile_setting: {
      user_id: user_id,
      user_display_language: "",
      user_display_temp: "",
      user_nickname: "",
      user_picture: "",
      create_date: new Date(),
      modified_date: new Date(),
    }
  }
}

app.get("/user/:id", (req, res) => {
  res.send(userResponse())
})

app.patch("/user_detail/:id", (req, res) => {
  res.send(userResponse(req.params.id))
})

function buildingResponse(building_id, deep=true) {
  // Note: rename building_*** to ***
  // Dont't forget type field

  let res = {
    type: "building",

    id: building_id,
    name: "Building "+building_id,
    picture: "https://png.pngtree.com/png-clipart/20190920/original/pngtree-suburban-high-rise-residential-building-illustration-png-image_4619899.jpg",
    avatar: "https://png.pngtree.com/png-clipart/20190920/original/pngtree-suburban-high-rise-residential-building-illustration-png-image_4619899.jpg",
    is_two_level: (building_id % 2 == 0 ? true : false),
    status: "",
    position: {
      top: 0.3,
      left: 0.2,
      width: 0.5,
      height: 0.2,
    },

    owner_userid: 1,

    create_date: new Date(),
    create_by: 1,
    modified_date: new Date(),
    modified_by: 1,

    online_count: 4,
    total_count: 8,
    error_count: 1,
    S_online_count: 5,
    S_total_count: 4,
    S_error_count: 1,
    V_online_count: 1,
    V_total_count: 2,
    V_error_count: 0,
    C_online_count: 1,
    C_total_count: 1,
    C_error_count: 0,
  }

  if (deep) {
    res.children = [
      floorResponse(1, false),
      floorResponse(2, false),
      floorResponse(3, false),
      floorResponse(4, false),
    ]
  }

  return res;
}

app.get("/buildings", (req, res) => {
  res.send([
    buildingResponse(1, false),
    buildingResponse(2, false),
    buildingResponse(3, false),
    buildingResponse(4, false),
  ])
})

app.get("/building/:id", (req, res) => {
  res.send(buildingResponse(req.params.id))
})

app.patch("/building/:id", (req, res) => {
  res.send(buildingResponse(req.params.id))
})

app.delete("/building/:id", (req, res) => {
  res.sendStatus(204)
})

function floorResponse(floor_id, deep=true) {
  // Note: rename floor_*** to ***

  let res = {
    type: "floor",

    id: floor_id,
    name: "Floor "+floor_id,
    picture: "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/113134540/original/a91da71d8eb894c5fbbcab6ce2995fa3c0488776/make-a-complete-plan-and-elevation-of-a-residential-building.jpg",
    avatar: "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/113134540/original/a91da71d8eb894c5fbbcab6ce2995fa3c0488776/make-a-complete-plan-and-elevation-of-a-residential-building.jpg",
    status: "",
    position: {
      top: 0.3,
      left: 0.2,
      width: 0.5,
      height: 0.2,
    },

    building_id: 1,

    create_date: new Date(),
    create_by: 1,
    modified_date: new Date(),
    modified_by: 1,

    online_count: 4,
    total_count: 8,
    error_count: 1,
    S_online_count: 5,
    S_total_count: 4,
    S_error_count: 1,
    V_online_count: 1,
    V_total_count: 2,
    V_error_count: 0,
    C_online_count: 1,
    C_total_count: 1,
    C_error_count: 0,
  }

  if (deep) {
    res.children = [
      roomResponse(1, false),
      roomResponse(2, false),
      roomResponse(3, false),
      roomResponse(4, false),
    ]
  }

  return res;
}

app.get("/floor/:id", (req, res) => {
  res.send(floorResponse(req.params.id))
})

app.patch("/floor/:id", (req, res) => {
  res.send(floorResponse(req.params.id))
})

app.post("/floor", (req, res) => {
  res.send(floorResponse(req.params.id))
})

app.delete("/floor/:id", (req, res) => {
  res.sendStatus(204)
})

function roomResponse(room_id, deep=true) {
  // Note: rename room_*** to ***
  // Dont't forget type field

  let res = {
    type: "room",

    id: room_id,
    name: "Room "+room_id,
    picture: "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/113134540/original/a91da71d8eb894c5fbbcab6ce2995fa3c0488776/make-a-complete-plan-and-elevation-of-a-residential-building.jpg",
    avatar: "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/113134540/original/a91da71d8eb894c5fbbcab6ce2995fa3c0488776/make-a-complete-plan-and-elevation-of-a-residential-building.jpg",
    status: "",
    position: {
      top: 0.3,
      left: 0.2,
      width: 0.5,
      height: 0.2,
    },

    floor_id: 1,

    create_date: new Date(),
    create_by: 1,
    modified_date: new Date(),
    modified_by: 1,

    online_count: 4,
    total_count: 8,
    error_count: 1,
    S_online_count: 5,
    S_total_count: 4,
    S_error_count: 1,
    V_online_count: 1,
    V_total_count: 2,
    V_error_count: 0,
    C_online_count: 1,
    C_total_count: 1,
    C_error_count: 0,
  }

  if (deep) {
    res.children = [
      deviceResponse(1),
      deviceResponse(2),
      deviceResponse(3),
      deviceResponse(4),
    ]
  }

  return res;
}

app.get("/room/:id", (req, res) => {
  res.send(roomResponse(req.params.id))
})

app.patch("/room/:id", (req, res) => {
  res.send(roomResponse(req.params.id))
})

app.post("/room", (req, res) => {
  res.send(roomResponse(req.params.id))
})

app.delete("/room/:id", (req, res) => {
  res.sendStatus(204)
})

app.post("/room/:room_id/device/:device_id", (req, res) => {
  res.send(roomResponse(req.params.room_id))
})

app.delete("/room/:room_id/device/:device_id", (req, res) => {
  res.sendStatus(204)
})

function deviceResponse(device_id) {
  // Don't forget to clone some fields

  return {
    // Don't forget to clone these fields
    type: "device",
    id: device_id,
    name: "Device "+device_id,

    device_detail: {
      // Sent on add
      device_name: "Device "+device_id,
      device_air_type: {
        // Read Only
        airtype_id: 0,
        airtype_name: "",
        status: ""
      },
    
      // Modified later
      room_id: 0,
    
      // Read Only
      created_by: 0,
      created_date: new Date(),
      modified_by: 0,
      modified_date: new Date(),
    },
    device_control_air: {
      // Common data
      device_air_brand_id: 1,
      device_air_type_id: 1,
      device_air_wifi_ssid: "",
      device_air_wifi_ssid_password: "",
      device_air_productcode: "",
      device_air_product_generation: "",
      device_air_upgrade_version: "",
      device_air_version: 0,
      technician: {
        technician_id: 1,
        technician_name: "",
        technician_phone: "",
        technician_address: "",
        technician_under_shop_name: "",
      },
      device_mqtt_hostname: "",
      device_mqtt_password: "",
      device_private_ip_address: "",
      device_static_ip_address: "",
    
      // Control data
      device_fan_speed: 0,
      device_mode: "",
      device_status: "",
      device_swing_mode: 0,
      device_is_locked_remote: "",
      device_temp: 0,
  
      // Insurance data
      device_air_buy_form: "",
      delivery_date: new Date(),
      warranty_all_part_month: 0,
      warranty_compressor_month: 0,
      warranty_installation_month: 0,
  
      // Read Only
      device_id: device_id,
      created_by: 1,
      created_date: new Date(),
      modified_by: 1,
      modified_date: new Date(),
      device_air_mac_address: "",
      device_air_brand: {
        // Read Only
        airbrand_id: 1,
        airbrand_name: "Daikin",
        status: ""
      },
      device_air_type: {
        // Read Only
        airtype_id: 1,
        airtype_name: "Split type",
        status: ""
      },
    },
    device_type_id: 1,
  
    // Read Only
    device_id: device_id,
    device_type: {
      device_type_id: 1,
      device_type_name: "เครื่องปรับอากาศ",
    },
    room_id: 1, // Assign later
    created_by: 1,
    created_date: new Date(),
    modified_by: 1,
    modified_date: new Date(),
  }
}

app.get("/device/:id", (req, res) => {
  res.send(deviceResponse(req.params.device_id))
})

app.post("/device", (req, res) => {
  res.send(deviceResponse(1))
})

app.patch("/device/:id", (req, res) => {
  res.send(deviceResponse(req.params.device_id))
})

app.patch("/device_control_air/:id", (req, res) => {
  res.send(deviceResponse(req.params.device_id))
})

app.post("/device/:device_id/turn_on", (req, res) => {
  res.send(deviceResponse(req.params.device_id))
})

app.post("/device/:device_id/turn_off", (req, res) => {
  res.send(deviceResponse(req.params.device_id))
})


app.listen(port, ()=>{
  console.log("Runned at http://localhost:"+port)
})