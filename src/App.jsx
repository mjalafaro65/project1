import './App.css';
import Card from './Card';
const App = () => {

  return (
    <div className="App">
      <h1 className='tittle'>Top restaurants Dover NJ</h1>
      <div  className='card-container'>
        <Card title='Sabor Latino Restaurant' image='img/1.webp' content="44 N Morris St, Dover, NJ 07801" onButtonClick="https://www.saborlatinodovernj.net/menus"/>
        <Card title='ONE11 Bar & Kitchen' image='img/2.webp'content="111 E Blackwell St, Dover, NJ 07801" onButtonClick="https://one11barandkitchen.com/order"/>
        <Card title='El Marino' image='img/3.webp'content="130 Mt Hope Ave, Dover, NJ 07801" onButtonClick="https://places.singleplatform.com/el-marino-2/menu?ref=google"/>
        <Card title='Las Tres Marias' image='img/4.webp' content="88 N Sussex St, Dover, NJ 07801" onButtonClick="https://places.singleplatform.com/las-tres-marias/menu?ref=google"/>
        <Card title='Las Costillas de Pedro' image='img/5.webp' content="57 N Sussex St, Dover, NJ 07801" onButtonClick="https://places.singleplatform.com/la-costilla-depedro/menu?ref=google"/>
        <Card title="Margarita's Bar & Grill" image='img/6.webp' content="330 S Salem St, Dover, NJ 07801" onButtonClick="https://www.ubereats.com/store/margaritas-bar-and-grill-dover/PYDMUm5VT_yfLV5JAuioUw?diningMode=PICKUP&utm_campaign=CM2508147-search-free-nonbrand-google-pas_e_all_acq_Global&utm_medium=search-free-nonbrand&utm_source=google-pas"/>
        <Card title='Brenda Lee Restaurant' image='img/7.webp' content="15 E Blackwell St, Dover, NJ 07801" onButtonClick="https://myorderportal.com/brendaleedover"/>
        <Card title='Azteca Restaurant' image='img/8.webp' content="17 E Blackwell St # 1, Dover, NJ 07801" onButtonClick="https://www.google.com/search?sa=X&ved=2ahUKEwiM0Peh1eeNAxWnD1kFHRsvEZYQzeMEegQIAxAA&q=Azteca+Restaurant&ludocid=6690647193726070575&lsig=AB86z5X_0RlM1eqQi_IrwAyZ4cct#lkt=LocalPoiPhotos&lpg=cid:CgIYIQ%3D%3D"/>
        <Card title="Marino's Cafe" image='img/9.webp' content="90 Belmont Ave, Dover, NJ 07801" onButtonClick="https://www.ubereats.com/store/marinos-cafe/HiptA6NzThWIajpnK_Uf1A?diningMode=PICKUP&utm_campaign=CM2508147-search-free-nonbrand-google-pas_e_all_acq_Global&utm_medium=search-free-nonbrand&utm_source=google-pas"/>
        <Card title="Tequila's 55" image='img/10.webp' content="55 E Blackwell St, Dover, NJ 07801" onButtonClick="https://tequilasdover.com/menu"/>
      </div>
    </div>
  )
}

export default App
