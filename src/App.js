import BundleItem from "./components/BundleItem";
import Bundle from "./components/Bundle";
import './App.css';

function App() {
  return (
    <div className="general">
      <div>
        <h1>Crafts Room</h1>
        <div className="triple">
          <Bundle title="Spring Foraging Bundle">
            <BundleItem name="Wild Horseradish" id="wildHorseradish" tooltip="Spring Foraging" />
            <BundleItem name="Daffodil" id="daffodil" tooltip="Spring Foraging, buy from Pierre at Flower Dance" />
            <BundleItem name="Leek" id="leek" tooltip="Spring Foraging" />
            <BundleItem name="Dandelion" id="dandelion" tooltip="Spring Foraging, buy from Pierre at Flower Dance" />
          </Bundle>
          <Bundle title="Summer Foraging Bundle">
            <BundleItem name="Grape" id="grape" tooltip="Summer Foraging, Fall Farming" />
            <BundleItem name="Spice Berry" id="spiceBerry" tooltip="Summer Foraging, The Farm Cave (fruit bat option)" />
            <BundleItem name="Sweet Pea" id="sweetPea" tooltip="Summer Foraging" />
          </Bundle>
          <Bundle title="Fall Foraging Bundle">
            <BundleItem name="Common Mushroom" id="commonMushroom" tooltip="Fall Foraging, Spring & Fall Foraging in the Secret Woods, The Farm Cave (mushroom option), Tapping a Mushroom Tree" />
            <BundleItem name="Wild Plum" id="wildPlum" tooltip="Fall Foraging, The Farm Cave (fruit bat option)" />
            <BundleItem name="Hazelnut" id="hazelnut" tooltip="Fall Foraging" />
            <BundleItem name="Blackberry" id="blackberry" tooltip="Fall Foraging, The Farm Cave (fruit bat option)" />
          </Bundle>
        </div>
        <div className="triple">
          <Bundle title="Winter Foraging Bundle">
            <BundleItem name="Winter Root" id="winterRoot" tooltip="Tilling soil or Artifact Spots in Winter, dropped by Blue Slimes on floors 41-79 of The Mines" />
            <BundleItem name="Crystal Fruit" id="crystalFruit" tooltip="Winter Foraging, dropped by Dust Sprites on floors 41-79 of The Mines" />
            <BundleItem name="Snow Yam" id="snowYam" tooltip="Tilling soil or Artifact Spots in Winter" />
            <BundleItem name="Crocus" id="crocus" tooltip="Winter Foraging" />
          </Bundle>
          <Bundle title="Construction Bundle">
            <BundleItem name="Wood (99)" id="wood" tooltip="Chopping Trees or branches with an Axe, Carpenter's Shop" />
            <BundleItem name="Wood (99)" id="wood" tooltip="Chopping Trees or branches with an Axe, Carpenter's Shop" />
            <BundleItem name="Stone (99)" id="stone" tooltip="Smashing stones with a Pickaxe, Carpenter's Shop" />
            <BundleItem name="Hardwood (10)" id="hardwood" tooltip="Chopping Large Stumps or Large Logs with an upgraded Axe, smashing crates in The Mines" />
          </Bundle>
          <Bundle title="Exotic Foraging Bundle">
            <BundleItem name="Coconut" id="coconut" tooltip="Desert Foraging, Oasis" />
            <BundleItem name="Cactus Fruit" id="cactusFruit" tooltip="Desert Foraging, Oasis" />
            <BundleItem name="Cave Carrot" id="caveCarrot" tooltip="The Mines, either smashing boxes or tilling soil" />
            <BundleItem name="Red Mushroom" id="redMushroom" tooltip="Foraging in The Mines, Summer or Fall Foraging in the Secret Woods, The Farm Cave (mushroom option), Tapping a Mushroom Tree, Forest Farm Map in Fall." />
            <BundleItem name="Purple Mushroom" id="purpleMushroom" tooltip="The Mines, The Farm Cave (mushroom option), Forest Farm Map Foraging in Fall" />
            <BundleItem name="Maple Syrup" id="mapleSyrup" tooltip="Tapped Maple Tree" />
            <BundleItem name="Oak Resin" id="oakResin" tooltip="Tapped Oak Tree" />
            <BundleItem name="Pine Tar" id="pineTar" tooltip="Tapped Pine Tree" />
            <BundleItem name="Morel" id="morel" tooltip="Foraging in the Secret Woods or Forest Farm Map in Spring, The Farm Cave (mushroom option)" />
          </Bundle>
        </div>
        <h1>Pantry</h1>
        <div className="triple">
          <Bundle title="Spring Crops Bundle">
            <BundleItem name="Parsnip" id="parsnip" tooltip="Spring Crops" />
            <BundleItem name="Green Bean" id="greenBean" tooltip="Spring Crops" />
            <BundleItem name="Cauliflower" id="cauliflower" tooltip="Spring Crops" />
            <BundleItem name="Potato" id="potato" tooltip="Spring Crops" />
          </Bundle>
          <Bundle title="Summer Crops Bundle">
            <BundleItem name="Tomato" id="tomato" tooltip="Summer Crops" />
            <BundleItem name="Hot Pepper" id="hotPepper" tooltip="Summer Crops" />
            <BundleItem name="Blueberry" id="blueberry" tooltip="Summer Crops" />
            <BundleItem name="Melon" id="melon" tooltip="Summer Crops" />
          </Bundle>
          <Bundle title="Fall Crops Bundle">
            <BundleItem name="Corn" id="corn" tooltip="Summer / Fall Crops" />
            <BundleItem name="Eggplant" id="eggplant" tooltip="Fall Crops" />
            <BundleItem name="Pumpkin" id="pumpkin" tooltip="Fall Crops" />
            <BundleItem name="Yam" id="yam" tooltip="Fall Crops, dropped by Duggies on floors 6-29 of The Mines (3%)" />
          </Bundle>
        </div>
        <div className="triple">
          <Bundle title="Quality Crops Bundle">
            <BundleItem name="Parsnip	(5)" id="parsnip" tooltip="Gold quality Spring Crops" />
            <BundleItem name="Melon	(5)" id="melon" tooltip="Gold quality Summer Crops" />
            <BundleItem name="Pumpkin	(5)" id="pumpkin" tooltip="Gold quality Fall Crops" />
            <BundleItem name="Corn	(5)" id="corn" tooltip="Gold quality Summer/Fall Crops" />
          </Bundle>
          <Bundle title="Animal Bundle">
            <BundleItem name="Large Milk" id="largeMilk" tooltip="Cows" />
            <BundleItem name="Large Egg (Brown)" id="largeBrownEgg" tooltip="Brown Chickens" />
            <BundleItem name="Large Egg" id="largeEgg" tooltip="White Chickens" />
            <BundleItem name="Large Goat Milk" id="largeGoatMilk" tooltip="Goats" />
            <BundleItem name="Wool" id="wool" tooltip="Sheep, Rabbits" />
            <BundleItem name="Duck Egg" id="duckEgg" tooltip="Ducks" />
          </Bundle>
          <Bundle title="Artisan Bundle">
            <BundleItem name="Truffle Oil" id="truffleOil" tooltip="Made from Truffles using an Oil Maker" />
            <BundleItem name="Cloth" id="cloth" tooltip="Loom, Recycling a Soggy Newspaper, Desert Trader, dropped by Mummies in Skull Cavern" />
            <BundleItem name="Goat Cheese" id="goatCheese" tooltip="Cheese Press" />
            <BundleItem name="Cheese" id="cheese" tooltip="Cheese Press, Desert Trader" />
            <BundleItem name="Honey" id="honey" tooltip="Bee House, Oasis" />
            <BundleItem name="Jelly" id="jelly" tooltip="Preserves Jar" />
            <BundleItem name="Apple" id="apple" tooltip="Apple Trees during Fall, The Farm Cave (fruit bat option)" />
            <BundleItem name="Apricot" id="apricot" tooltip="Apricot Trees during Spring, The Farm Cave (fruit bat option)" />
            <BundleItem name="Orange" id="orange" tooltip="Orange Trees during Summer, The Farm Cave (fruit bat option)" />
            <BundleItem name="Peach" id="peach" tooltip="Peach Trees during Summer, The Farm Cave (fruit bat option)" />
            <BundleItem name="Pomegranate" id="pomegranate" tooltip="Pomegranate Trees during Fall, The Farm Cave (fruit bat option)" />
            <BundleItem name="Cherry" id="cherry" tooltip="Cherry Trees during Spring, The Farm Cave (fruit bat option)" />
          </Bundle>
        </div>
        <h1>Fish Tank</h1>
        <div className="triple">
          <Bundle title="River Fish Bundle">
            <BundleItem name="Sunfish" id="sunfish" tooltip="Found in Rivers, 6am – 7pm, Spring and Summer during sunny weather." />
            <BundleItem name="Catfish" id="catfish" tooltip="	Found in Rivers and Secret Woods, 6am – midnight, Spring and Fall. Only while raining. Can be found in Summer during rain in the Secret Woods and Witch's Swamp, Winter with a Rain Totem." />
            <BundleItem name="Shad" id="shad" tooltip="Found in Rivers, 9am – 2am, Spring, Summer, and Fall. Only while raining." />
            <BundleItem name="Tiger Trout" id="tigerTrout" tooltip="	Found in Rivers, 6am – 7pm, Fall and Winter. Can be found in any weather." />
          </Bundle>
          <Bundle title="Lake Fish Bundle">
            <BundleItem name="Largemouth Bass" id="largemouthBass" tooltip="Found in the Mountain Lake, 6am – 7pm, All Seasons." />
            <BundleItem name="Carp" id="carp" tooltip="Found in the Mountain Lake, Anytime, during Spring, Summer, or Fall. Found in Secret Woods or Sewer, Anytime, All Seasons." />
            <BundleItem name="Bullhead" id="bullhead" tooltip="Found in the Mountain Lake, Anytime, All Seasons." />
            <BundleItem name="Sturgeon" id="sturgeon" tooltip="Found in the Mountain Lake, 6am – 7pm, Summer and Winter." />
          </Bundle>
          <Bundle title="Ocean Fish Bundle">
            <BundleItem name="Sardine" id="sardine" tooltip="Found in the Ocean, 6am – 7pm, Spring, Fall, and Winter." />
            <BundleItem name="Tuna" id="tuna" tooltip="Found in the Ocean, 6am – 7pm, Summer and Winter." />
            <BundleItem name="Red Snapper" id="redSnapper" tooltip="Found in the Ocean, 6am – 7pm, Summer and Fall. Only when raining." />
            <BundleItem name="Tilapia" id="tilapia" tooltip="Found in the Ocean, 6am – 2pm, Summer and Fall." />
          </Bundle>
        </div>
        <div className="triple">
          <Bundle title="Night Fishing Bundle">
            <BundleItem name="Walleye" id="walleye" tooltip="Found in Rivers, the Mountain Lake, and Cindersap Forest Pond, 12pm – 2am, Fall (Winter with Rain Totem.) Only when raining." />
            <BundleItem name="Bream" id="bream" tooltip="Found in Rivers, 6pm – 2am, All Seasons." />
            <BundleItem name="Eel" id="eel" tooltip="Found in the Ocean, 4pm – 2am, Spring or Fall. Only when raining." />
          </Bundle>
          <Bundle title="Crab Pot Bundle">
            <BundleItem name="Lobster" id="lobster" tooltip="Caught in Crab Pots (ocean)" />
            <BundleItem name="Crayfish" id="crayfish" tooltip="Caught in Crab Pots (freshwater)" />
            <BundleItem name="Crab" id="crab" tooltip="Caught in Crab Pots (ocean), drops from Rock Crabs or Lava Crabs in The Mines" />
            <BundleItem name="Cockle" id="cockle" tooltip="Caught in Crab Pots (ocean), Beach Foraging" />
            <BundleItem name="Mussel" id="mussel" tooltip="Caught in Crab Pots (ocean), Beach Foraging" />
            <BundleItem name="Shrimp" id="shrimp" tooltip="Caught in Crab Pots (ocean)" />
            <BundleItem name="Snail" id="snail" tooltip="Caught in Crab Pots (freshwater)" />
            <BundleItem name="Periwinkle" id="periwinkle" tooltip="Caught in Crab Pots (freshwater)" />
            <BundleItem name="Oyster" id="oyster" tooltip="Caught in Crab Pots (ocean), Beach Foraging" />
            <BundleItem name="Clam" id="clam" tooltip="Caught in Crab Pots (ocean), Beach Foraging" />
          </Bundle>
          <Bundle title="Specialty Fish Bundle">
            <BundleItem name="Pufferfish" id="pufferfish" tooltip="Found in the Ocean, 12pm – 4pm, Summer during sunny weather." />
            <BundleItem name="Ghostfish" id="ghostfish" tooltip="Found in ponds in The Mines floors 20 and 60, Anytime, All Seasons. May also be dropped by Ghosts." />
            <BundleItem name="Sandfish" id="sandfish" tooltip="Found in the pond in The Desert, 6am – 8pm, All Seasons." />
            <BundleItem name="Woodskip" id="woodskip" tooltip="Found in the Secret Woods and the Forest Farm, Anytime, All Seasons." />
          </Bundle>
        </div>
        <h1>Boiler Room</h1>
        <div className="triple">
          <Bundle title="Blacksmith's Bundle">
            <BundleItem name="Copper Bar" id="copperBar" tooltip="Smelting Copper Ore in the Furnace" />
            <BundleItem name="Iron Bar" id="ironBar" tooltip='Smelting Iron Ore in the Furnace, Crafting the "Transmute (Fe)" recipe' />
            <BundleItem name="Gold Bar" id="goldBar" tooltip='Smelting Gold Ore in the Furnace, Crafting the "Transmute (Au)" recipe' />
          </Bundle>
          <Bundle title="Geologist's Bundle">
            <BundleItem name="Quartz" id="quartz" tooltip="Foraging on all floors of The Mines" />
            <BundleItem name="Earth Crystal" id="earthCrystal" tooltip="Foraging on floors 1-39 of The Mines, Geodes, Omni Geodes, drop from Duggies in the Mines (floors 6-29)" />
            <BundleItem name="Frozen Tear" id="frozenTear" tooltip="Foraging on floors 41-79 of The Mines, Frozen Geodes, Omni Geodes, drop from Dust Sprites in the Mines (floors 41-79)" />
            <BundleItem name="Fire Quartz" id="fireQuartz" tooltip="Foraging on floors 81-119 of The Mines, Magma Geodes, Omni Geodes" />
          </Bundle>
          <Bundle title="Adventurer's Bundle">
            <BundleItem name="Slime (99)" id="slime" tooltip="Dropped by Slimes" />
            <BundleItem name="Bat Wing (10)" id="batWing" tooltip="Dropped by Bats in The Mines or the Skull Cavern" />
            <BundleItem name="Solar Essence" id="solarEssence" tooltip="Dropped by Ghosts, Squid Kids, or Metal Heads in The Mines, dropped by Mummies or Iridium Bats in the Skull Cavern; produced by Sunfish in Fish Ponds; buy from Krobus" />
            <BundleItem name="Void Essence" id="voidEssence" tooltip="Dropped by Shadow Brutes or Shadow Shamans in The Mines or Serpents in the Skull Cavern; produced by Void Salmon in Fish Ponds; buy from Krobus" />
          </Bundle>
        </div>
        <h1>Bulletin Board</h1>
        <div className="triple">
          <Bundle title="Chef's Bundle">
            <BundleItem name="Maple Syrup" id="mapleSyrup" tooltip="Tapped Maple Tree" />
            <BundleItem name="Fiddlehead Fern" id="fiddleheadFern" tooltip="Summer Foraging in the Secret Woods, Foraging on Prehistoric Floors at the Skull Cavern" />
            <BundleItem name="Truffle" id="truffle" tooltip="Pigs" />
            <BundleItem name="Poppy" id="poppy" tooltip="Summer Crops" />
            <BundleItem name="Maki Roll" id="makiRoll" tooltip="Cooking (recipe sources: The Queen of Sauce, The Saloon)" />
            <BundleItem name="Fried Egg" id="friedEgg" tooltip="Cooking" />
          </Bundle>
          <Bundle title="Dye Bundle">
            <BundleItem name="Red Mushroom" id="redMushroom" tooltip="	Foraging in The Mines, Summer or Fall Foraging in the Secret Woods, The Farm Cave (mushroom option), Tapping a Mushroom Tree" />
            <BundleItem name="Sea Urchin" id="seaUrchin" tooltip="Beach Foraging, after using 300 wood to fix the bridge to the right side of The Beach or any side of the beach during crab mating season; foraging in the Beach Farm" />
            <BundleItem name="Sunflower" id="sunflower" tooltip="Summer / Fall Crops" />
            <BundleItem name="Duck Feather" id="duckFeather" tooltip="Ducks" />
            <BundleItem name="Aquamarine" id="aquamarine" tooltip="Aquamarine Nodes, boxes in The Mines, Fishing Treasure Chests" />
            <BundleItem name="Red Cabbage" id="redCabbage" tooltip="Summer Crops (Red Cabbage Seeds are available at Pierre's General Store in year 2+, at the Traveling Cart, or dropped by Serpents, Mummies, and Purple Slimes)" />
          </Bundle>
          <Bundle title="Field Research Bundle">
            <BundleItem name="Purple Mushroom" id="purpleMushroom" tooltip="The Mines, The Farm Cave (mushroom option), Forest Farm Map Foraging in Fall" />
            <BundleItem name="Nautilus Shell" id="nautilusShell" tooltip="Winter Beach Foraging, Beach Farm Map Foraging during any season, Random gift from Demetrius (Note: NOT the Nautilus Fossil artifact)" />
            <BundleItem name="Chub" id="chub" tooltip="Can be found in the mountain lake and river during all seasons, any time." />
            <BundleItem name="Frozen Geode" id="frozenGeode" tooltip="The Mines floors 41-79" />
          </Bundle>
        </div>
        <div className="triple">
          <Bundle title="Fodder Bundle">
            <BundleItem name="Wheat (10)" id="wheat" tooltip="Summer / Fall Crops" />
            <BundleItem name="Hay (10)" id="hay" tooltip="Purchase at Marnie's Ranch or Desert Trader, or harvest from Grass or Wheat." />
            <BundleItem name="Apple (3)" id="apple" tooltip="Apple Trees during Fall, The Farm Cave (fruit bat option)" />
          </Bundle>
          <Bundle title="Enchanter's Bundle">
            <BundleItem name="Oak Resin" id="oakResin" tooltip="Tapped Oak Tree" />
            <BundleItem name="Wine" id="wine" tooltip="Keg" />
            <BundleItem name="Rabbit's Foot" id="rabbitsFoot" tooltip="Rabbits, Serpent drop in Skull Cavern (0.8%)" />
            <BundleItem name="Pomegranate" id="pomegranate" tooltip="Pomegranate Trees during Fall, The Farm Cave (fruit bat option)" />
          </Bundle>
        </div>
      </div>
    </div>
  );
}

export default App;
