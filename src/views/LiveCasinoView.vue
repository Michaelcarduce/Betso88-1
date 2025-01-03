<script setup>
import Hero from "@/components/Hero.vue";
import Banner from "@/components/Banner.vue";
import Image from "@/components/Image.vue";
import CardGrid2 from "@/components/CardGrid2.vue";
import Footer from "@/components/Footer.vue";

import banner1 from "@/assets/img/bannerLiveCasino1.jpg";
import bannerMobile1 from "@/assets/img/bannerLiveCasinoMobile1.jpg";
import image1 from "@/assets/img/livecasino1.jpg";
import image2 from "@/assets/img/livecasino2.jpg";
import image3 from "@/assets/img/livecasino3.jpg";
import image4 from "@/assets/img/livecasino4.jpg";
import homeImg3 from "@/assets/img/livecasinoModel1.png";
import sportsSteps from "@/assets/img/sportsSteps.jpg";
</script>

<template>
  <div class="mt-28"></div>
  <Banner
    width="100%"
    :duration="1500"
    :imageSrc="banner1"
    :imageSrcMobile="bannerMobile1" />
  <Hero
    class="mb-10"
    title="Bet88 Live Casino: Your Gateway to Online Casino Entertainment in the
    Philippines"
    subTitle=" In recent years, the online gaming industry in the Philippines has grown
    rapidly, which has allowed the rise of many online casino platforms. One of
    the most trusted and well-known names in this field is Bet88 Live Casino. In
    the year 2025, Bet88 continues to prove their popularity as the best online
    casino in the country, thanks to their exceptional service, wide selection
    of games, and excellent customer support." />

  <div class="flex flex-wrap justify-center items-center gap-2 mb-20">
    <CardGrid2 :duration="1200" :imageSrc="image1" :imageSrcMobile="image1" />
    <CardGrid2 :duration="1300" :imageSrc="image2" :imageSrcMobile="image2" />
    <CardGrid2 :duration="1400" :imageSrc="image3" :imageSrcMobile="image3" />
    <CardGrid2 :duration="1500" :imageSrc="image4" :imageSrcMobile="image4" />
  </div>

  <h2
    class="text-3xl sm:text-3xl md:text-4xl lg:text-5xl mb-5 bg-gradient-to-r from-yellow-200 to-orange-400 text-transparent bg-clip-text font-bold leading-relaxed">
    What is Bet88 Live Casino?
  </h2>
  <p class="text-ml sm:text-m md:text-l lg:text-xl mb-5 text-white">
    Bet88 Live Casino is an online gaming platform that offers a wide selection
    of live dealer games, slots, and other casino games. With their
    state-of-the-art streaming technology, they are able to bring the real
    experience of playing in a physical casino straight to your home. Bet88
    allows players to interact with real dealers and other players in real-time,
    making it popular among Filipinos.
  </p>

  <h2
    class="text-3xl sm:text-3xl md:text-4xl lg:text-5xl mb-5 mt-20 bg-gradient-to-r from-yellow-200 to-orange-400 text-transparent bg-clip-text font-bold leading-relaxed">
    Why Players Choose Bet88 Live Casino?
  </h2>
  <h3
    class="text-2xl sm:text-2xl md:text-3xl lg:text-4xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 bg-gradient-to-r from-yellow-100 to-orange-200 text-transparent bg-clip-text font-bold">
    Innovative Technology and User-Friendly Interface
  </h3>
  <p
    class="text-ml sm:text-m md:text-l lg:text-xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 text-white">
    The Bet88 website is designed to be user-friendly, making it easy to
    navigate and find games. Their platform is also mobile-friendly, allowing
    players to enjoy their favorite games anywhere and anytime. High quality
    video streaming and audio provide an immersive experience, making it seem
    like you are right there in the casino.
  </p>
  <h3
    class="text-2xl sm:text-2xl md:text-3xl lg:text-4xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 bg-gradient-to-r from-yellow-100 to-orange-200 text-transparent bg-clip-text font-bold">
    Wide Selection of Games
  </h3>
  <p
    class="text-ml sm:text-m md:text-l lg:text-xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 text-white">
    At Bet88 Live Casino, a wide range of games can be found, including:
  </p>
  <h4
    class="text-xl sm:text-xl md:text-1xl lg:text-2xl mb-5 px-8 md:px-8 lg:px-16 xl:px-32 bg-gradient-to-r from-orange-100 to-yellow-100 text-transparent bg-clip-text font-bold">
    Live Dealer Games:
  </h4>
  <p
    class="text-ml sm:text-m md:text-l lg:text-xl mb-5 px-8 md:px-8 lg:px-16 xl:px-32 text-white">
    Favorites like baccarat, blackjack, and roulette are offered in live
    settings. Real dealers play the games and have the ability to interact with
    the players, which adds to the fun and excitement.
  </p>
  <h4
    class="text-xl sm:text-xl md:text-1xl lg:text-2xl mb-5 px-8 md:px-8 lg:px-16 xl:px-32 bg-gradient-to-r from-orange-100 to-yellow-100 text-transparent bg-clip-text font-bold">
    Slots:
  </h4>
  <p
    class="text-ml sm:text-m md:text-l lg:text-xl mb-5 px-8 md:px-8 lg:px-16 xl:px-32 text-white">
    Different types of video slots with colorful themes, special features, and
    high payout rates are available. Slot games are easy to play and provide a
    high chance of winning.
  </p>
  <h4
    class="text-xl sm:text-xl md:text-1xl lg:text-2xl mb-5 px-8 md:px-8 lg:px-16 xl:px-32 bg-gradient-to-r from-orange-100 to-yellow-100 text-transparent bg-clip-text font-bold">
    Sports Betting:
  </h4>
  <p
    class="text-ml sm:text-m md:text-l lg:text-xl mb-5 px-8 md:px-8 lg:px-16 xl:px-32 text-white">
    For sports lovers, Bet88 also offers sports betting options where you can
    bet on various sporting events, from basketball to boxing.
  </p>
  <h3
    class="text-2xl sm:text-2xl md:text-3xl lg:text-4xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 bg-gradient-to-r from-yellow-100 to-orange-200 text-transparent bg-clip-text font-bold">
    Secure and Fast Transactions
  </h3>
  <p
    class="text-ml sm:text-m md:text-l lg:text-xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 text-white">
    Bet88 is known for their high level of security. They use advanced
    encryption technologies to ensure the safety of players' transactions and
    information. It is also easy to deposit and withdraw using local payment
    methods such as GCash, PayMaya, and bank transfer. The withdrawal process is
    fast, allowing players to get their winnings without delay.
  </p>
  <h3
    class="text-2xl sm:text-2xl md:text-3xl lg:text-4xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 bg-gradient-to-r from-yellow-100 to-orange-200 text-transparent bg-clip-text font-bold">
    Good Promotions and Bonuses
  </h3>
  <p
    class="text-ml sm:text-m md:text-l lg:text-xl mb-5 px-5 md:px-5 lg:px-10 xl:px-20 text-white">
    A big attraction of Bet88 Live Casino is their promotions and bonuses. New
    players can get a welcome bonus that carries a lot of money to get started.
    There are also regular promotions for loyal players, such as cashback
    offers, free spins, and tournaments with big prizes.
  </p>

  <h2
    class="text-center text-3xl sm:text-3xl md:text-4xl lg:text-5xl mb-10 mt-20 bg-gradient-to-r from-yellow-200 to-orange-400 text-transparent bg-clip-text font-bold leading-relaxed">
    How to Get Started with Bet88 Live Casino?
  </h2>
  <div
    class="mb-10 flex flex-col md:flex-row gap-10 bg-midnightGlass backdrop-blur-md rounded-[7px] w-full py-10 px-10">
    <div class="md:w-1/2 w-full">
      <Image
        width="100%"
        :duration="1500"
        :speed="0.8"
        :imageSrc="sportsSteps"
        :imageSrcMobile="sportsSteps">
      </Image>
    </div>
    <div class="md:w-1/2 w-full">
      <p
        class="text-3xl sm:text-3xl md:text-4xl lg:text-5xl mb-5 mt-20 bg-gradient-to-r from-yellow-200 to-orange-400 text-transparent bg-clip-text font-bold">
        01
      </p>
      <div class="bg-purple-900/10 w-full rounded-[4px] px-5 py-5">
        <h4
          class="text-left text-xl sm:text-xl md:text-1xl lg:text-2xl mb-5 bg-gradient-to-r from-orange-100 to-yellow-100 text-transparent bg-clip-text font-bold">
          Sign Up:
        </h4>
        <p class="text-left text-ml sm:text-m md:text-l lg:text-xl text-white">
          The first step to get started with Bet88 is to register an account.
          The process is easy and fast. Just visit the Bet88 official website,
          click “Register,” and fill in the required information such as name,
          email address, and other personal details. Be sure to enter the
          correct information to avoid any problems with account verification.
        </p>
      </div>
    </div>
  </div>
  <div
    class="mb-10 flex flex-col md:flex-row gap-10 bg-midnightGlass backdrop-blur-md rounded-[7px] w-full py-10 px-10">
    <div class="md:w-1/2 w-full">
      <p
        class="text-3xl sm:text-3xl md:text-4xl lg:text-5xl mb-5 mt-20 bg-gradient-to-r from-yellow-200 to-orange-400 text-transparent bg-clip-text font-bold">
        02
      </p>
      <div class="bg-purple-900/10 w-full rounded-[4px] px-5 py-5">
        <h4
          class="text-left text-xl sm:text-xl md:text-1xl lg:text-2xl mb-5 bg-gradient-to-r from-orange-100 to-yellow-100 text-transparent bg-clip-text font-bold">
          Deposit of Funds:
        </h4>
        <p class="text-left text-ml sm:text-m md:text-l lg:text-xl text-white">
          After signing up, you need to make a deposit to play. Bet88 offers
          different payment options. Choose your favorite method, enter the
          amount, and follow the deposit instructions. You will see your funds
          in your account and you are ready to play.
        </p>
      </div>
    </div>
    <div class="md:w-1/2 w-full">
      <Image
        width="100%"
        :duration="1500"
        :speed="0.8"
        :imageSrc="sportsSteps"
        :imageSrcMobile="sportsSteps">
      </Image>
    </div>
  </div>
  <div
    class="mb-10 flex flex-col md:flex-row gap-10 bg-midnightGlass backdrop-blur-md rounded-[7px] w-full py-10 px-10">
    <div class="md:w-1/2 w-full">
      <Image
        width="100%"
        :duration="1500"
        :speed="0.8"
        :imageSrc="sportsSteps"
        :imageSrcMobile="sportsSteps">
      </Image>
    </div>
    <div class="md:w-1/2 w-full">
      <p
        class="text-3xl sm:text-3xl md:text-4xl lg:text-5xl mb-5 mt-20 bg-gradient-to-r from-yellow-200 to-orange-400 text-transparent bg-clip-text font-bold">
        03
      </p>
      <div class="bg-purple-900/10 w-full rounded-[4px] px-5 py-5">
        <h4
          class="text-left text-xl sm:text-xl md:text-1xl lg:text-2xl mb-5 bg-gradient-to-r from-orange-100 to-yellow-100 text-transparent bg-clip-text font-bold">
          Select a Game:
        </h4>
        <p class="text-left text-ml sm:text-m md:text-l lg:text-xl text-white">
          After making a deposit, you can choose from their wide selection of
          games. If you want to try the live dealer games, go to the live casino
          section and select the game you want to play. If you are more
          interested in slots, browse their slots section and start playing.
        </p>
      </div>
    </div>
  </div>

  <div class="flex flex-col md:flex-row mt-20 mb-20 gap-4">
    <div class="md:w-1/2 flex flex-col items-center md:pl-20 lg:pl-20">
      <h3
        class="text-2xl sm:text-2xl md:text-3xl lg:text-4xl mb-5 bg-gradient-to-r from-yellow-200 to-orange-400 text-transparent bg-clip-text font-bold leading-relaxed pt-5 md:pt-5 lg:pt-10 xl:pt-20">
        Tips for Playing Successfully at Bet88 Live Casino
      </h3>
      <p class="text-ml sm:text-m md:text-l lg:text-xl text-white mb-5">
        <strong
          class="bg-gradient-to-r from-yellow-100 to-orange-200 text-transparent bg-clip-text font-bold"
          >Know the Rules:</strong
        >
        Before playing, make sure you understand the rules of the game. This
        will help you make decisions more easily and avoid mistakes.
      </p>

      <p class="text-ml sm:text-m md:text-l lg:text-xl text-white mb-5">
        <strong
          class="bg-gradient-to-r from-yellow-100 to-orange-200 text-transparent bg-clip-text font-bold"
          >Set a Budget:</strong
        >
        Setting a budget for your gaming is important. Don't exceed your set
        amount and learn to stop when needed.
      </p>

      <p class="text-ml sm:text-m md:text-l lg:text-xl text-white mb-5">
        <strong
          class="bg-gradient-to-r from-yellow-100 to-orange-200 text-transparent bg-clip-text font-bold"
          >Take advantage of the Bonuses:</strong
        >
        Don't forget to use the bonuses and promotions offered by Bet88. These
        will help you get more funds and more chances to win.
      </p>

      <p class="text-ml sm:text-m md:text-l lg:text-xl text-white">
        <strong
          class="bg-gradient-to-r from-yellow-100 to-orange-200 text-transparent bg-clip-text font-bold"
          >Practice Responsible Gaming:
        </strong>
        Casino games should be considered entertainment only. Play responsibly
        and don't let it cause stress or problems in your life.
      </p>
    </div>
    <div class="md:w-1/2 flex items-center justify-end md:pr-20 lg:pr-52">
      <Image
        width="80%"
        :duration="1500"
        :speed="0.8"
        :imageSrc="homeImg3"
        :imageSrcMobile="homeImg3"
        class="object-cover h-full">
      </Image>
    </div>
  </div>

  <Footer></Footer>
</template>
