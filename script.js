function showMessage(messageNumber) {
    const messages = [
      ['Teri muskurahat se hi toh hmari subah hoti h! Keep spreading that sunshine, my superstar!', 'image1a.jpg'],
      ['Teri positivity se toh ye din kitna pyara bn gya! Keep radiating those good vibes!', 'image1b.jpg'],
      ['Teri khushi se lgta h jse hr tension ka instant antidote mil gya ho. Keep smiling!', 'image1c.jpg'],
      ['Teri khushi se toh lgta h ki happiness ki dictionary ka cover photo tu h!', 'image1d.jpg'],
      ['Teri khushi se hr tension ka GPS off ho gya h. Bcz this is the only route to happiness!', 'image1e.jpg'],
  
      ['Dil toh karta h, tere gamo ka delete button daba du aur ek big emoji wala hug bhej du!', 'image2a.jpg'],
      ['Yaar, zindagi ek roller coaster h na, kbhi niche kbhi upr, lekin tu mera ride-or-die partner h, samjha?! Always here for you!', 'image2b.jpg'],
      ['Apki personal cheerleader is here to bring back that cute smile!', 'image2c.jpg'],
      ['It is okay not to be okay. Reach out for support. Yaad rakh, me hmesha yaha hu, tera mood booster!', 'image2d.jpg'],
      ['Yaar, tere gusse ka ek simple solution h. Bas ek baar gale lagane ki zaroorat h. Aa jaa, emotional embrace session shuru karte h!', 'image2e.jpg'],
  
      ['Tension mat le, me tera virtual teddy bear hu. Ab rona-dhona band kr aur mujhe ek tight sa hug kr!', 'image3a.jpg'],
      ['Aaj teri anxiety ko dekhke lagta h ki universe ne ek extra dose of hugs bhejne ka decide kia h. So, bring it in, buddy!', 'image3b.jpg'],
      ['Anxiety ka kya h, hm dono milkr use confuse kr denge. Humara secret weapon - laughter therapy!', 'image3c.jpg'],
      ['Tension lene ka time nhi h, kyuki teri smile ka zamana h. Ab jldi se ek selfie bhej, happy wali!', 'image3d.jpg'],
      ['Arey dost, teri anxiety se ldne ka mood h aaj! Lets create a laughter shield around you, taki stress ka koi chance na ho!', 'image3e.jpg'],
  
      ['Dost, teri company ka charm hi kuch aur h. Ese lonely hone se kya hoga? Aaj toh video call pe face-to-face teri loneliness ko bhgana banta h, what say?', 'image4a.jpg'],
      ['Loneliness kya, hmari dosti ke magic se sb kuch solve hojaega. Aa jaa, hum ek virtual coffee peene chale!', 'image4b.jpg'],
      ['Arey dost, teri muskurahat se toh Zoom call pe bhi screen glow karna shuru ho jaati h. Video call pe milte h, thike?', 'image4c.jpg'],
      ['Dost, tu meri playlist ka most played track h. Chl, aaj hm apne favorite songs share karte hain, maybe discover krenge kuch new!', 'image4d.jpg'],
      ['Tera mere life mein aana hi destiny ka plan tha. Kahi destiny ne hme minecraft khelne k liye hi toh nhi milvaya? Lets hop on!', 'image4e.jpg'],
  
      ['Gusse ka time ho gaya h end, ab smile ka time start karte h. Teri muskurahat ke bina hr day incomplete h, yaar!', 'image5a.jpg'],
      ['Arey yaar, gusse ka kya scene h? Aaj tera mood booster bannne ka plan h, chal count back kr fir i will show you a trick!', 'image5b.jpg'],
      ['Dost, gusse ka koi scope nhi, kyunki tere bina toh mere jokes ka koi audience hi nhi h. Aja mere stand-up ka front row banaa!', 'image5c.jpg'],
      ['Gusse m ho toh Spider-Man bhi tujhe competition nhi de skta. Aja ek selfie lete h, tere angry superhero pose ke saath!', 'image5d.jpg'],
      ['Gusse ka h asar, lekin tu h mera pyaar; Meri shayari m h bs tera hi izhaar! Aaj hass le mere yaar, bhul ja gusse ko, Dil se kehta hu, tu mere liye h khaas, mere dost!', 'image5e.jpg'],
  
      ['Boredom se ldne ka mood h? Abhi hm dono milke minecraft (ya koi aur game of your choice) khelte h. Ksa rhega?', 'image6a.jpg'],
      ['Arey yaar, boredom ka koi scope nhi ab, kyuki ab tera entertainment director me hu! Aja koi movie dekhenge saath m discord p', 'image6b.jpg'],
      ['Boredom ko bhgane ka time aa gya h ji! Chlo, next outing plan krte h! Up for some more Delhi exploration?', 'image6c.jpg'],
      ['Boredom ki fight m, hm team h. Aaj hum dono milke usse hara denge, challenge accepted? Aja vid call p strategy discuss krte h ', 'image6d.jpg'],
      ['Try these: pointerpointer.com theuselessweb.com patatap.com zoomquilt.org littlealchemy.com findtheinvisiblecow sporcle.com', 'image6e.jpg'],
  
      ['Jealous? Kyu? Tere bina toh meri life ka plot hi incomplete h. Ab bas, hm ek saath picture perfect bnte h', 'image7a.jpg'],
      ['Insecure? Arey yaar, tu toh meri lifeline h. Tere bina toh mere emotions ka GPS hi gum ho jata h!', 'image7b.jpg'],
      ['Tu h meri pyaari jalebi! Tere bina toh meri life ka flavor hi missing h.', 'image7c.jpg'],
      ['Tu h meri favorite chocolate. Baki sab toh sirf wrappers h, tu hi toh asli mithas h, yaar!', 'image7d.jpg'],
      ['Yaar, tu mere dil ka password h. Kisi aur ko entry ka access nhi, samjha?', 'image7e.jpg'],
  
      ['Dil se saying, tere har fear ko hm saath m face karenge! Tu mera support system h, aur me tere liye hmesha yaha hu!.', 'image8a.jpg'],
      ['Dil se saying, tu jo bhi fear feel kar rha h, vo bas ek temporary guest h. Aur me teri permanent host hu, ready to kick it out! Chl ftft se talk it out with me', 'image8b.jpg'],
      ['Arey yaar, tu itna cute h, koi bhi fear tujhe dekhkar bhag jaega! Hum dono ek hi team m h, har ek darr ko defeat karne ke liye!', 'image8c.jpg'],
      ['Yaar, tu h mera happy space! Koi bhi fear aae, hm dono saath m ek comfort zone banaenge, jaha sb kuch good hoga!', 'image8d.jpg'],
      ['Tere sath hr fear ko face krna feels like a grand adventure. Hm ek hi boat m h, sailing through the sea of fears, aur I promise you that the land of happiness is just ahead!', 'image8e.jpg'],
  
      ['Yaar, teri excitement dekhke lgta h jse tu ek walking-talking patakha ho! Ese hi happy vibes spread krte rho, aur me hmesha tere saath hu!', 'image9a.jpg'],
      ['Tu h mera daily dose of sunshine. Tere excitement se lgta h teri energy source koi extra bright star h (just like you!)', 'image9b.jpg'],
      ['Tu itna excited h ki mujhe bhi lg rha h me kisi new galaxy ko explore kr rhi hu! Abhi hm saath m, isi galaxy m, happy vibes leke ghoomenge. Yay!', 'image9c.jpg'],
      ['Dost, tere excitement se lgta h, tu kisi happy carnival ka headliner h. Chl, hm ek sath carnival of joy m kho jate h!', 'image9d.jpg'],
      ['Tu h meri happy journey ka co-traveler. Aaj hm dono sath m ek happy road trip pe nikl jaate h, kyuki meri manzil bhi tu, meri raah bhi tu!', 'image9e.jpg'],
    ];
  
    const randomIndex = Math.floor(Math.random() * 5);
    const selectedMessage = messages[(messageNumber - 1) * 5 + randomIndex];
  
    const messageContainer = document.getElementById('message-container');
    const messageElement = document.getElementById('message');
    const imageElement = document.getElementById('image');
  
    messageElement.textContent = selectedMessage[0];
    imageElement.src = selectedMessage[1];
  
    messageContainer.classList.remove('hidden');
  
    // Hide buttons
    const buttons = document.querySelectorAll('.button-56');
    buttons.forEach(button => button.style.display = 'none');
  }
  