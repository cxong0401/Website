//questions
const question_bank = [];
/*
question_bank[0]="Sarah loves to read, and today she's in a bookstore. She picks up a book she's been wanting for a while, and it costs RM10. Then, she finds a beautiful pen for RM2.75. Thus, she should pay the total amount of RM12.75 to the cashier.";
question_bank[1]="David is shopping for a new outfit for a special event. He chooses a stylish shirt that costs RM25. Along with that, he picks out a matching tie for RM8.50. Total cost of David's new look is RM33.50";
question_bank[2]="Tom decides to have a nice meal at his favorite restaurant. He orders a delicious meal for RM12. To quench his thirst, he also orders a drink for RM3.25. The total amount of RM15.25 where Tom needs to pay for his meal and drink.";
question_bank[3]="Emma is at the toy store, and she's excited to get a new toy. She selects a toy she's been eyeing for a while, and it costs RM15.75. To satisfy her sweet tooth, she grabs some candy for RM0.60. RM16.35 is the total expense for Emma's treats.";
question_bank[4]="Lisa decides to treat herself to some pampering. She goes to the salon and gets a stylish haircut for RM18.50. She also gets a manicure for RM5.  Lisa should pay RM23.50 for her salon services";
question_bank[5]="Jack is a gamer, and he's been waiting for a new video game to release. It costs RM30. While he's playing, he gets hungry and buys a snack for RM4.25. RM34.25 was the total amount Jack needs to pay for his entertainment and snack";
question_bank[6]="Olivia plans a movie night out. She buys a movie ticket for RM9.75 and can't resist getting a box of popcorn for RM2.50. The total cost of Olivia's movie night is RM12.25";
question_bank[7]="Alex wants to start cycling, so he buys a bicycle for RM85. Safety is essential, so he also purchases a helmet for RM12. Alex's total expenditure for his new bike and helmet is RM97";
question_bank[8]="Sophie wants to update her wardrobe. She chooses a stylish dress for RM45. To complete the look, she buys a pair of beautiful shoes for RM18.75. How much does Sophie need to pay for her new outfit which total amount is RM63.75";
question_bank[9]="James stops by a café for a coffee break. He orders a cup of coffee for RM4.50 and a delicious sandwich for RM6.25. RM10.75 was the total cost of James' meal at the café";
question_bank[10]="Emma, an adventurous foodie, strolled through the bustling fruit market. She picked up 3 juicy apples for RM1.50 each and 4 plump bananas for RM2.25. Her total came to RM10, a fair price for a delightful fruit adventure.";
question_bank[11]="David, an avid reader, embarked on a literary journey at the cozy neighborhood bookstore. He chose 2 gripping novels for RM15 each and a colorful magazine for RM4.50. As he left the store, he held RM34.50 worth of knowledge in his hands.";
question_bank[12]="Sophie, a fashion enthusiast, decided it was time for a wardrobe makeover. She snagged 2 trendy T-shirts for RM12 each and a pair of stylish jeans for RM25. Her total bill came to RM49, a small price to pay for a fresh new look.";
question_bank[13]="Mike, a tech enthusiast, ventured into the high-tech store. He secured a sleek smartphone for RM80 and a protective phone case for RM5. His quest for the latest gadgets cost him a total of RM85.";
question_bank[14]="Oliver, an outdoor enthusiast, embarked on an expedition into the wilderness. He invested in a sturdy tent for RM40, a reliable camping stove for RM20, and a cozy sleeping bag for RM15. The price of adventure totaled RM75.";
question_bank[15]="Lisa, a coffee connoisseur, sought solace in a cozy café. She ordered a fragrant cappuccino for RM4 and a buttery croissant for RM3.50. Her escape from the world cost her a total of RM7.50.";
question_bank[16]="Ben, with a green thumb, ventured into a magical garden center. He collected 5 packets of flower seeds for RM2 each and a shiny new watering can for RM5. His green paradise had a price tag of RM15.";
question_bank[17]="Lucy, a budding artist, embarked on an artistic journey. She filled her cart with 3 high-quality sketchbooks for RM6 each and a vibrant set of paints for RM10. Her artistic journey came to a total of RM28.";
question_bank[18]="Tom, a pet lover, set out for a pet store adventure. He acquired a bag of nutritious dog food for RM8.50 and a sturdy leash for RM12. His adventure into pet care cost him a total of RM20.50.";
question_bank[19]="Sophia, a diligent student, embarked on an expedition for essential office supplies. She acquired 2 packs of pens for RM5 each and a sleek notebook for RM3. Her academic expedition totaled RM13.";
question_bank[20]="Anna decided to stock up on art supplies, grabbing paints for RM45.20 and two sketchbooks for RM26.75, totaling RM71.95.";
question_bank[21]="Mark made his garden bloom with a beautiful bouquet of flowers for RM18.90 and added three potted plants for RM36.50, coming to a total of RM55.40.";
question_bank[22]="Lucy went to her favorite bookstore and selected a novel for RM29.95. She also couldn't resist picking up two magazines for RM7.20, making her total expenditure RM37.15.";
question_bank[23]="Tom made a quick grocery run, picking up fresh fruits for RM14.30, crisp vegetables for RM12.50, and some snacks for RM8.75. In the end, his total grocery bill amounted to RM35.55.";
question_bank[24]="Sophie wanted the best for her furry friend, so she bought dog food for RM23.60 and a new leash for RM9.90. Her total pet supply cost was RM33.50.";
question_bank[25]="David treated himself to a night at the movies, buying a ticket for RM13.50. He also indulged in a large popcorn for RM8.75, bringing his total expenditure to RM22.25.";
question_bank[26]="Emma found a stunning dress for RM42.80 and paired it with a lovely scarf for RM8.75. Her clothing shopping added up to RM51.55.";
question_bank[27]="Oliver needed some new tech accessories, so he picked up a phone case for RM15.30 and a wireless charger for RM19.50, resulting in a total electronics cost of RM34.80.";
question_bank[28]="Nina went on a stationery shopping spree, grabbing a set of notebooks for RM12.80 and stocking up on pens for RM5.40. Her stationery expenses totaled RM18.20.";
question_bank[29]="James enjoyed a leisurely coffee break, savoring a cup of coffee and indulging in a pastry for RM4.75. His coffee break was a delightful RM9.50 in total.";
question_bank[30]="Rachel, an avid tennis player, invested in her sport, purchasing a tennis racket for RM55.60 and stocking up on tennis balls for RM8.40. Her sports gear expenses came to RM64.00.";
*/

question_bank[0]="莎拉热爱阅读，今天她在书店里拿起了一本她想买很久的书，价格是RM 10。然后，她发现了一支漂亮的钢笔，价格是RM 2.75。因此，她应该向收银员支付总额为RM 12.75。";
question_bank[1]="大卫正在为一个特别的活动购物。他选择了一件时尚的衬衫，价格是RM 25。除此之外，他还挑选了一条配套的领带，价格是RM 8.50。大卫新造型的总费用是RM 33.50。";
question_bank[2]="汤姆决定在他最喜欢的餐厅享用美味的一餐。他点了一份美味的套餐，价格是RM 12。为了解渴，他还点了一杯饮料，价格是RM 3.25。汤姆共需要支付RM 15.25。";
question_bank[3]="艾玛在玩具店，她很兴奋地要买一个新玩具。她选择了一个她一直想要的玩具，价格是RM 15.75。为了满足她的甜食口味，她还拿了一些糖果，价格是RM 0.60。艾玛的总花费是RM 16.35。";
question_bank[4]="丽莎去理发院剪了一个时尚的发型，价格是RM 18.50。她还做了一个美甲，价格是RM 5。丽莎应该支付RM 23.50的美容服务费。";
question_bank[5]="杰克是个游戏玩家，他一直在等待一款新的游戏发布。它价格是RM 30。当他玩游戏时，他感到饿了，买了一些零食，价格是RM 4.25。杰克需要支付RM 34.25的娱乐和零食费用。";
question_bank[6]="奥利维亚计划了看电影。她购买了一张电影票，价格是RM 9.75，还忍不住买了一盒爆米花，价格是RM 2.50。奥利维亚看电影的总花费是RM 12.25。";
question_bank[7]="亚历克斯想开始骑自行车，所以他花了RM 85买了一辆自行车。安全至关重要，所以他还买了一顶头盔，价格是RM 12。亚历克斯新自行车和头盔的总支出是RM 97。";
question_bank[8]="索菲想更新她的衣橱。她选择了一件时尚的连衣裙，价格是RM 45。为了完成这个造型，她还买了一双漂亮的鞋子，价格是RM 18.75。索菲需要支付RM 63.75的新衣服。";
question_bank[9]="詹姆斯在咖啡馆停下来休息。他点了一杯咖啡，价格是RM 4.50，还点了一个美味的三明治，价格是RM 6.25。詹姆斯在咖啡馆的总花费是RM 10.75。";
question_bank[10]="爱玛在水果市场漫步。她挑了3个多汁的苹果，每个RM 1.50，和4根饱满的香蕉，每根RM 2.25。她的总花费是RM 10。";
question_bank[11]="大卫在舒适的社区书店开始了一次文学之旅。他选择了2本扣人心弦的小说，每本RM 15，还有一本彩色杂志，价格是RM 4.50。当他离开书店时，他手里拿着总值RM 34.50的知识。";
question_bank[12]="索菲决定是时候换个衣橱了。她挑了2件时尚的T恤，每件RM 12，还有一条时尚的牛仔裤，价格是RM 25。她的账单总共是RM 49。";
question_bank[13]="迈克买了一部时尚的智能手机，价格是RM 80，还有一个保护手机的手机壳，价格是RM 5。他的总花费是RM 85。";
question_bank[14]="奥利弗，一个户外爱好者，踏上了进入荒野的探险之旅。他投资了一顶坚固的帐篷，价格是RM 40，一台可靠的露营炉，价格是RM 20，还有一只舒适的睡袋，价格是RM 15。这次探险的价格总共是RM 75。";
question_bank[15]="丽莎在一个舒适的咖啡馆点了一杯香浓的卡布奇诺，价格是RM 4，还有一个黄油松饼，价格是RM 3.50。她的总花费是RM 7.50。";
question_bank[16]="本踏入一个神奇的花园中心。他选购了5包花种，每包RM 2，还有一只浇水壶，价格是RM 5。总价格标签是RM 15。";
question_bank[17]="露西的购物车装满了3本高质量的素描本，每本RM 6，还有一套颜料，价格是RM 10, 总共是RM 28。";
question_bank[18]="汤姆，一个宠物爱好者，买了一袋营养丰富的狗粮，价格是RM 8.50，还有一个坚固的狗绳，价格是RM 12。他的总花费是RM 20.50。";
question_bank[19]="索菲亚，一个勤奋的学生，买了2盒笔，每盒RM 5，还有一个时尚的笔记本，价格是RM 3。总共是RM 13。";
question_bank[20]="安娜决定备货艺术用品，买了RM 45.20的颜料和两本RM 26.75的素描本，总共RM 71.95。";
question_bank[21]="马克为了让他的花园开满鲜花，花了RM 18.90买了一束美丽的花束，还加了三盆RM 36.50的盆栽，总共RM 55.40。";
question_bank[22]="露西去了她最喜欢的书店，选了一本RM 29.95的小说。她还忍不住拿了两本RM 7.20的杂志，使她的总支出为RM 37.15。";
question_bank[23]="汤姆买了RM 14.30的新鲜水果，RM 12.50的新鲜蔬菜和RM 8.75的零食。最后，他的总账单为RM 35.55。";
question_bank[24]="索菲买了RM 23.60的狗粮和RM 9.90的新绳。她的总宠物用品花费是RM 33.50。";
question_bank[25]="大卫给自己买了电影票，价格是RM 13.50。他还放纵了自己，买了一个RM 8.75的大桶爆米花，使他的总支出为RM 22.25。";
question_bank[26]="爱玛找到了一件价格为RM 42.80的漂亮连衣裙，搭配了一条RM 8.75的可爱围巾。她的服装购物总花费为RM 51.55。";
question_bank[27]="奥利弗需要一些新的科技配件，所以他买了一个RM 15.30的手机壳和一个RM 19.50的无线充电器，总共RM 34.80的电子产品费用。";
question_bank[28]="妮娜买了一套RM 12.80的笔记本，还囤了一些RM 5.40的笔。她的文具开支总计RM 18.20。";
question_bank[29]="詹姆斯享受了一次悠闲的咖啡时间，品尝了一杯咖啡并点了一块RM 4.75令吉的糕点。他美好的咖啡时间总共是RM 9.50。";
question_bank[30]="瑞秋，一位热爱网球的爱好者，购买了一把RM 55.60的网球拍，并储备了RM 8.40的网球。她的运动装备开支总共是RM 64.00。";

//answers
const answer_bank = [];
answer_bank[0]=12.75;
answer_bank[1]=33.50;
answer_bank[2]=15.25;
answer_bank[3]=16.35;
answer_bank[4]=23.50;
answer_bank[5]=34.25;
answer_bank[6]=12.25;
answer_bank[7]=97.00;
answer_bank[8]=63.75;
answer_bank[9]=10.75;
answer_bank[10]=10.00;
answer_bank[11]=34.50;
answer_bank[12]=49.00;
answer_bank[13]=85.00;
answer_bank[14]=75.00;
answer_bank[15]=7.50;
answer_bank[16]=15.00;
answer_bank[17]=28.00;
answer_bank[18]=20.50;
answer_bank[19]=13.00;
answer_bank[20]=71.95;
answer_bank[21]=55.40;
answer_bank[22]=37.15;
answer_bank[23]=35.55;
answer_bank[24]=33.50;
answer_bank[25]=22.25;
answer_bank[26]=51.55;
answer_bank[27]=34.80;
answer_bank[28]=18.20;
answer_bank[29]=9.50;
answer_bank[30]=64.00;




function generateOneToTwenty() {
    const random_number = Math.floor(Math.random() * 31) * 1; // Random integer between 0 and 10
    return random_number;
}

let questionNumber = generateOneToTwenty();

function updateQuestion() {
    const questionElement = document.getElementById('questions');
    questionElement.textContent = question_bank[questionNumber];
}


document.addEventListener('DOMContentLoaded', function () {
    questionNumber = generateOneToTwenty();
    updateQuestion();

    // Clear the selected notes/coins and result message when the page loads
    selectedNotesCoins.length = 0;
    updateSelectedNotesCoins();
    
    const result = document.getElementById('result');
    result.textContent = '';
    result.style.color = '';
});

// Initialize an array to track selected notes/coins
const selectedNotesCoins = [];


function updateSelectedNotesCoins() {
    const selectedArea = document.getElementById('selected-notes-coins');
    selectedArea.innerHTML = '';

    let totalAmount = 0;

    for (let i = 0; i < selectedNotesCoins.length; i++) {
        const noteCoin = selectedNotesCoins[i];
        const img = document.createElement('img');
        img.src = noteCoin.src;
        img.alt = noteCoin.alt;
        img.style.maxWidth = '150px';
        img.style.maxHeight = '70px';
        img.setAttribute('data-index', i); // Set a data attribute to store the index

        // Add a click event listener to remove the selected note/coin
        img.addEventListener('click', () => {
            selectedNotesCoins.splice(i, 1); // Remove the item from the array
            updateSelectedNotesCoins(); // Update the displayed notes/coins
        });

        selectedArea.appendChild(img);

        totalAmount += noteCoin.value;
    }
    totalAmount = parseFloat(totalAmount.toFixed(2)); // Round to 2 decimal places

}


const bgm = document.getElementById('bgm');
const originalBgmVolume = bgm.volume;


function checkAnswer() {
    let totalAmount = 0;

    for (const noteCoin of selectedNotesCoins) {
        totalAmount += noteCoin.value;
    }
    totalAmount = parseFloat(totalAmount.toFixed(2)); // Round to 2 decimal places

    const result = document.getElementById('result');

    if (totalAmount == answer_bank[questionNumber]) {
        result.textContent = '恭喜你答对了！你选择了正确的金额!';
        result.style.color = 'green';
        
        // Play the correct sound
        const correctSound = document.getElementById('correct-sound');
        correctSound.play();
    } else {
        result.textContent = '很可惜答错了。再试一试吧！';
        result.style.color = 'red';
        
        // Play the incorrect sound
        const incorrectSound = document.getElementById('incorrect-sound');
        incorrectSound.play();
    }
}

function checkAnswer() {
    let totalAmount = 0;

    for (const noteCoin of selectedNotesCoins) {
        totalAmount += noteCoin.value;
    }
    totalAmount = parseFloat(totalAmount.toFixed(2)); // Round to 2 decimal places

    const result = document.getElementById('result');

    if (totalAmount == answer_bank[questionNumber]) {
        result.textContent = '恭喜你答对了！你选了正确的金额。';
        result.style.color = 'green';

        // Lower the BGM volume temporarily
        bgm.volume = originalBgmVolume * 0.1;

        // Play the correct sound
        const correctSound = document.getElementById('correct-sound');
        correctSound.play();

        // Restore the BGM volume to its original level after a delay (adjust the delay as needed)
        setTimeout(() => {
            bgm.volume = originalBgmVolume;
        }, 4000); 
    } else {
        result.textContent = '很可惜答错了。再试一试吧！';
        result.style.color = 'red';

        // Lower the BGM volume temporarily
        bgm.volume = originalBgmVolume * 0.1;

        // Play the incorrect sound
        const incorrectSound = document.getElementById('incorrect-sound');
        incorrectSound.play();

        // Restore the BGM volume to its original level after a delay (adjust the delay as needed)
        setTimeout(() => {
            bgm.volume = originalBgmVolume;
        }, 11000); 
    }
}





// Event listeners for notes/coins
const notesCoins = document.querySelectorAll('.note-coin');
for (const noteCoin of notesCoins) {
    noteCoin.addEventListener('click', () => {
        selectedNotesCoins.push({
            src: noteCoin.src,
            alt: noteCoin.alt,
            value: parseFloat(noteCoin.getAttribute('data-value')),
        });

        updateSelectedNotesCoins();
    });
}

// Event listener for the "Check Answer" button
const checkButton = document.getElementById('check-answer');
checkButton.addEventListener('click', checkAnswer);

// Function to handle the "Next Question" button click event
function nextQuestion() {
    // Generate a new random question number
    questionNumber = generateOneToTwenty();

    // Update the displayed question
    updateQuestion();

    // Clear the selected notes/coins
    selectedNotesCoins.length = 0;
    updateSelectedNotesCoins();

    // Clear the result message
    const result = document.getElementById('result');
    result.textContent = '';
    result.style.color = '';
}

// Event listener for the "Next Question" button
const nextQuestionButton = document.getElementById('next-question');
nextQuestionButton.addEventListener('click', nextQuestion);



const tutorialButton = document.getElementById("tutorial-button");

// Add event listener for the button click
tutorialButton.addEventListener("click", function() {
    // Redirect to the tutorial page
    window.location.href = "tut1.html"; // Replace "tutorial.html" with the actual URL of your tutorial page
});
