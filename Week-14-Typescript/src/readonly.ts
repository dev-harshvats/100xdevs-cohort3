type Config = {
  endpoint: string;
  apikey: string;
};

const config: Readonly<Config> ={
  endpoint: "http://api.example.com",
  apikey: "342354364553545"
}

// config.apikey = "dsfsd"     // Throws error