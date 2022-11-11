import {
  Flex,
  Box,
  Grid,
  GridItem,
  Heading,
  HStack,
  Center,
  Stack,
  Hide,
} from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <Box>
      <Grid
        gridTemplateColumns={{ md: "1fr 3fr", lg: "1fr 3fr" }}
        w={{ sm: "80%" }}
      >
        <Box pos='sticky' top='0' backgroundColor='white'>
          <Box h='80vh' pos='sticky' top='0' border='1px solid red' >
           
            <Hide below="md">
              <Box>
                <Center>
                  <Heading size="lg">KFC MENU</Heading>
                </Center>
              </Box>
            </Hide>
            <Flex justifyContent='space-around' alignItems='center' flexDir={{lg:'column', sm:'row',md:'row'}} h={{lg:'70vh', sm:'10vh',md:'70vh'}}>
           
                <NavLink to="#">Hot Deals</NavLink>
              
            
                <NavLink to="#">Chicken Buckets</NavLink>
             
                <NavLink to="#">Hot Launches</NavLink>
             
                <NavLink to="#">Box Meals</NavLink>
              
                <NavLink to="#">Burgers</NavLink>
             
                <NavLink to="#">Snack</NavLink>
             
                <NavLink to="#">Beverages and Desserts</NavLink>
            
            </Flex>
          </Box>
        </Box>

        {/* right Box */}
        <Grid p="0 10%" m="0 auto" textAlign="center" >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis labore
          cum consequuntur? Veritatis quas dolor unde fugiat, mollitia, pariatur
          accusamus vel optio, libero accusantium aperiam expedita laudantium
          dolorum necessitatibus. Quae labore commodi, nesciunt distinctio vero
          dolore corrupti? Fuga, aliquam explicabo quia deserunt dolor unde ipsa
          blanditiis tempora architecto ratione ex dignissimos, dolore soluta
          sint cum exercitationem rem eaque excepturi ipsum consequatur, quidem
          facere? Quisquam sequi, unde tempore aperiam natus atque, quam eius
          corporis esse similique ipsa. Asperiores, doloremque nobis? Molestiae
          dicta modi rem minus officia corporis fugiat ipsam adipisci sint,
          blanditiis repellat quidem soluta laudantium numquam dignissimos
          excepturi in recusandae ullam corrupti itaque. Neque nulla nemo,
          voluptatum tenetur quos facilis! Asperiores iusto beatae delectus
          aliquam neque iure, omnis ullam. Ipsam repellat reiciendis tenetur non
          vitae deleniti voluptatum ex placeat asperiores commodi praesentium
          consequatur libero ea consequuntur rem nihil, obcaecati provident, at,
          esse nesciunt voluptas ut perferendis alias. Incidunt iure hic
          pariatur consequuntur dolores, obcaecati eos nesciunt voluptas fuga
          suscipit cum unde sapiente? Velit deserunt dolorem ea ipsam cupiditate
          laudantium explicabo optio aliquid alias necessitatibus facilis, totam
          accusantium, maiores earum rerum ut, quaerat illum repellat quidem
          iusto consequuntur voluptas! Numquam, laboriosam. Veniam reprehenderit
          voluptate nemo, cupiditate velit inventore tenetur in corrupti sequi
          eum similique excepturi atque delectus veritatis libero saepe magni
          ducimus vero doloribus harum provident voluptatibus facere minus
          laboriosam. Veniam blanditiis facilis dolores. Esse sit totam facere
          deleniti excepturi ea, consequatur voluptate odit laudantium
          reiciendis illum nemo necessitatibus sunt! Sint a voluptas, nam non
          perferendis vel quisquam, doloribus voluptates ipsa nostrum facere
          fugit incidunt architecto aliquid reiciendis. Rem iusto expedita
          eligendi quae repudiandae ipsum aut ab praesentium hic tempora. Culpa
          porro quisquam obcaecati nulla voluptas quam cumque non fugiat quos
          voluptatum laudantium facilis facere, eum eveniet, itaque voluptate
          dolor, magnam recusandae? Blanditiis sit ex cupiditate architecto ad
          dolor facilis et assumenda consectetur ipsa alias, mollitia dolorum
          cum. Ad, dolorum eos, hic rerum illum inventore quibusdam doloremque
          accusamus animi quidem libero praesentium eveniet molestiae
          repudiandae vel minima quod, sapiente alias? Labore debitis vero nam
          quis eius iure animi? Quidem officiis dolore assumenda. Veritatis
          ipsum et fugiat officiis nesciunt dignissimos adipisci! Magni, dicta?
          Maxime error deserunt reprehenderit praesentium eligendi accusantium
          ut aperiam quod quos adipisci tempora nisi magnam, molestiae soluta
          quia ex facere, quaerat fugiat sequi nesciunt porro earum dolore
          totam! Voluptatum, provident nobis quaerat optio incidunt placeat
          cupiditate unde. Quae sunt sed earum facere doloremque. Consectetur
          fugit possimus laboriosam obcaecati iste quaerat quam deleniti.
          Officia inventore quia harum quam doloribus, aliquam sequi distinctio
          exercitationem delectus fugiat iste consequuntur sunt consectetur
          cumque mollitia explicabo, vel amet nulla rem dolores vitae pariatur.
          Explicabo, ab temporibus. Rem, repudiandae consequuntur mollitia
          voluptatibus aut iste velit natus. Voluptates iure similique
          architecto reiciendis qui hic iste quae. Ut, ab. Neque, nemo voluptas!
          Repellat tempore fuga iste provident obcaecati aperiam perspiciatis
          nulla reprehenderit sapiente. Officia quisquam incidunt ipsam quis? Ea
          iure molestias rem aliquam facere, perferendis minus rerum modi quae,
          aspernatur, beatae odio? Beatae possimus illo aliquid nesciunt, sed
          voluptas explicabo. Sed quidem laudantium perferendis, vero porro
          recusandae sit possimus architecto in voluptatum dignissimos soluta
          obcaecati repellendus ea iusto? Natus officia, quo iusto, porro
          praesentium accusantium similique iure error accusamus enim sit
          nesciunt omnis repellat saepe sint temporibus perspiciatis minima.
          Ullam deleniti reprehenderit esse fugit ipsam facere velit, ea eaque
          corrupti voluptatum nulla provident consequuntur quaerat neque in quae
          perferendis eveniet ratione doloribus harum sapiente voluptatibus
          magnam commodi. Possimus, error accusamus officia nemo placeat unde
          vel reprehenderit aliquam aut quos quisquam, veritatis dolor tempora
          totam distinctio animi minus ex, rerum laboriosam facilis reiciendis
          ipsum deserunt. Sint labore repudiandae delectus, voluptate aliquid
          maiores accusamus nihil odio laboriosam, quas temporibus voluptates
          voluptatum, illum ad repellat provident aliquam vero accusantium
          laudantium culpa? Pariatur aperiam consequuntur quisquam delectus
          debitis voluptatum voluptate! Delectus, nihil dicta! Odit provident
          sed magni mollitia, soluta exercitationem, itaque minima dignissimos
          doloribus reiciendis saepe temporibus maxime, voluptatibus tenetur quo
          nesciunt incidunt impedit! Alias officiis perspiciatis illo error sint
          placeat reiciendis distinctio? Veniam animi maxime eaque repellat
          voluptatem cumque libero est iure dolorum officiis quam voluptate
          asperiores, temporibus nihil rerum inventore reprehenderit atque! Sunt
          quis modi adipisci vero incidunt dolor voluptas tenetur recusandae
          cupiditate autem, quos illo porro! Exercitationem amet qui, deleniti
          illo fugiat molestiae quis ipsa suscipit eius iusto tempore laudantium
          ex ipsam quisquam vel numquam expedita sit voluptates minus? Iure eos
          dicta ipsum, iusto suscipit neque ut ex molestiae exercitationem
          dolorum minus laudantium architecto magnam harum! Cupiditate vel
          aperiam et quaerat vitae, consectetur, provident sint illo incidunt
          eligendi sit doloribus facere eos adipisci repellat dolore dolores
          dolorem deserunt consequuntur reiciendis ratione unde, quis qui
          excepturi? Neque, aliquam tempora. Modi, ratione aliquam sunt nihil,
          ut aperiam illo maiores sint fuga neque distinctio amet sapiente hic
          molestias ipsam tempore veritatis voluptate? Reprehenderit, nobis
          tempore? Placeat voluptatibus doloremque iusto sint, veniam autem aut.
          Adipisci illum rerum excepturi voluptatum aspernatur sunt quasi
          provident, ea iusto quis harum minus architecto nobis ratione
          recusandae alias qui odit incidunt, voluptate quibusdam. Libero,
          officia. Unde quae facilis nam odit nulla asperiores soluta, rem
          repellendus eos deserunt. Minus soluta tempora et, harum consectetur
          mollitia veniam inventore debitis cum illo labore hic illum recusandae
          a, modi asperiores architecto, voluptas doloribus itaque sequi ad
          sapiente? Cupiditate, ullam? Beatae, praesentium velit eligendi optio
          iste amet voluptatem magnam aut quo tempora fugit. Et perspiciatis
          totam earum error explicabo? Incidunt placeat earum reiciendis veniam
          veritatis optio harum ea corrupti aut itaque ab iusto similique
          maiores perferendis reprehenderit qui tempore rem, quae modi debitis.
          Esse cupiditate, delectus ullam numquam omnis inventore quo odio
          praesentium, magnam libero, incidunt sed impedit modi ex cumque hic
          voluptas unde eius perferendis! Quos sunt neque laborum quaerat modi
          error vel omnis tempora mollitia, reiciendis culpa tenetur
          perspiciatis blanditiis, et aspernatur. Voluptate recusandae velit
          autem quidem at, maxime perspiciatis animi repellendus voluptatum
          dolorum dolore asperiores commodi est consequatur magni necessitatibus
          dolor veniam et! Eveniet tempora cum consequatur nobis eligendi
          aliquam sit quod recusandae. Ex voluptatum, nisi, nihil illum ipsum
          inventore tenetur quaerat modi vero consectetur reiciendis,
          necessitatibus ducimus totam mollitia incidunt numquam nostrum minus
          non tempore ab iste voluptates. Autem modi quia assumenda distinctio
          expedita ad. Expedita velit, quibusdam sit tempora dolorem molestias
          dignissimos! At ea doloremque aspernatur repudiandae natus placeat?
          Provident assumenda facere ea, autem minima itaque commodi aut
          similique blanditiis voluptas neque id! Non quod debitis laborum neque
          quo aperiam sunt reprehenderit modi cumque odit saepe inventore nisi
          dignissimos eveniet, repellat, iure veritatis. Dolorum, deleniti.
          Culpa eius dignissimos quasi ut, excepturi, eligendi officia quod
          alias temporibus neque doloremque voluptates ad. Tempore ullam minima
          ab eaque, odit sit inventore distinctio voluptate omnis? Tempora ad
          earum, rerum fugiat doloremque at libero dolorum autem iste, quos aut,
          consectetur atque. Tempore provident explicabo doloribus possimus
          facere a quo placeat, incidunt labore voluptates doloremque tenetur ea
          dignissimos vero error nesciunt tempora, praesentium maiores deserunt
          est libero repellat cum perferendis soluta! Recusandae, quisquam
          optio! Quaerat unde nulla sint! Nemo illum voluptatum voluptatibus
          minima quisquam iste tenetur praesentium accusantium animi voluptate
          id corporis a facilis, architecto, dolore aspernatur deserunt rem
          rerum, in iure. Soluta voluptatibus repudiandae saepe velit dolor
          magni. Quibusdam repudiandae velit optio consequuntur dicta quidem
          mollitia ad alias fuga temporibus, corporis odio vero et quia ipsa
          repellendus animi expedita, adipisci architecto. Excepturi, ipsa
          illum, vero ex officia error autem corrupti repudiandae aperiam
          deleniti quas hic facilis minus delectus eos nesciunt debitis vel,
          blanditiis dolorum non obcaecati placeat! Commodi perspiciatis, soluta
          animi tenetur hic voluptas repellendus, eum ipsa architecto alias
          facere corrupti voluptatum quibusdam? Vero necessitatibus mollitia
          eveniet accusamus neque! Impedit, quod ea aut laboriosam maxime
          assumenda eaque ab repellat architecto quas modi saepe, veritatis
          fugit, nobis illo officia facere sunt! Illum aut in dolore deleniti
          libero rem explicabo ducimus labore officia facere quo ea quos
          repudiandae error id suscipit odio fuga fugiat accusantium eius, modi
          facilis. Tenetur dolore pariatur exercitationem veritatis nobis ipsum!
          Optio officia ratione, sed voluptatum repellendus illo iusto quasi
          aperiam quaerat facilis quas recusandae rerum voluptas laudantium
          expedita. Debitis officiis ea non incidunt repellat, voluptas
          recusandae laboriosam soluta fuga aperiam voluptatibus exercitationem
          cupiditate hic sequi at ex, suscipit perferendis quibusdam commodi cum
          nisi dolor nostrum architecto. Voluptatibus, eos voluptate aliquid
          eveniet quis dolor enim praesentium iusto deserunt nostrum architecto
          laboriosam natus magni ducimus minima et veniam quia ad, voluptates
          non dolorem similique culpa eum! Cumque, non autem! Alias iusto, omnis
          suscipit quidem repellat pariatur debitis vitae numquam saepe
          voluptates eum ipsam commodi aperiam architecto a dolor, cumque rem
          nulla possimus doloremque quos animi corrupti mollitia ipsum! Sint
          accusamus error harum vel fugiat doloremque cumque non soluta suscipit
          quibusdam illum cupiditate, esse maiores sapiente ex ipsam totam quas.
          Quasi ut libero deleniti quae, est minus facere fugit officia
          blanditiis porro quia ratione perspiciatis, ipsa aliquid. Harum atque
          quo suscipit alias quisquam! Fugit hic doloribus architecto,
          perspiciatis debitis delectus a iste expedita libero minima. Numquam
          mollitia tempora nesciunt ipsam totam tenetur earum veniam modi,
          asperiores quis fuga eos pariatur, repellat quam odio dignissimos!
          Ipsam ducimus minima cum voluptatem, inventore dignissimos reiciendis
          tenetur illo alias ex soluta exercitationem, quae totam praesentium
          nobis veniam repellendus tempore perferendis ab? Velit nostrum et
          reprehenderit corporis ducimus quam voluptates, blanditiis debitis
          tempora atque. At officia amet, eum ipsam incidunt illo similique qui
          ipsum rem, ipsa, provident exercitationem nam eligendi? Rerum
          excepturi atque suscipit officia, quis perspiciatis, eveniet doloribus
          dicta ducimus explicabo veniam! Nulla quos vero veritatis mollitia.
          Harum obcaecati facere aut itaque! Deserunt dolorum alias, inventore
          error officia quod maiores. Doloremque maiores ipsum voluptatem
          nesciunt dolor itaque soluta delectus neque vitae, doloribus magnam
          totam a sint! Nisi iusto nulla consequuntur ea! Facere earum, eos, aut
          fuga neque odit debitis non assumenda rem veritatis soluta voluptate
          nemo? Temporibus voluptatem iure quaerat voluptatum culpa aspernatur
          esse. Quae earum quod iste praesentium repudiandae atque ratione
          suscipit et tenetur dolorum in dicta iure ducimus voluptate quaerat
          sit neque voluptas consectetur, minima fuga magni! Sapiente, fuga
          delectus! Rem, rerum, optio, dolorum obcaecati numquam nulla sapiente
          unde adipisci magni placeat molestias fugiat perferendis. Ut et
          maiores accusantium, odit consequuntur quia ducimus, aspernatur dolore
          mollitia eaque suscipit, rem adipisci repellendus doloribus dolorem.
          Quibusdam quam doloremque aspernatur repudiandae reprehenderit nam
          assumenda est molestiae inventore accusamus laboriosam, neque, magni
          illo dignissimos hic tempora et earum similique cupiditate a. Porro,
          maxime est aliquam dolorum consectetur libero unde nam ab adipisci
          soluta dolore minima laborum! Hic aspernatur non cumque alias
          explicabo nostrum vitae temporibus voluptatum quibusdam et deserunt
          doloremque vero voluptatem illum tempore itaque est exercitationem
          asperiores labore, omnis rerum voluptatibus ipsum? Accusantium cumque
          maiores neque labore doloremque quia voluptatem modi molestias
          dignissimos aliquid recusandae minima rem ex harum, aut sunt aliquam
          ut ab ratione incidunt iste. Culpa modi odit natus quam quidem velit.
          Voluptate possimus iusto dolores vitae tempora. Eligendi placeat
          adipisci, ducimus incidunt amet rem cumque et. Provident, ex facere
          neque nemo a ab, tempora porro accusamus sint ducimus quod obcaecati
          aperiam qui magnam autem impedit quia nostrum soluta accusantium. In
          alias sunt commodi distinctio hic nam delectus sequi numquam corrupti
          nobis, qui aperiam autem tempore asperiores quae, similique laudantium
          magni ad nisi perspiciatis fuga. Assumenda non consequatur rem odit
          provident repellat, beatae ex! Nulla sint ipsum velit nostrum, cumque
          explicabo qui ea perspiciatis itaque fuga nihil. Explicabo laborum
          illum magni consectetur aut. Iure, alias voluptatum similique
          recusandae culpa ullam animi quos molestiae sunt modi voluptates,
          voluptas dolores nesciunt maxime. Ullam quibusdam autem suscipit.
          Consequuntur aspernatur soluta at quam dolore aliquid dolor fugiat,
          explicabo doloremque esse voluptates veritatis quisquam consectetur
          eaque ab expedita sed dolorem natus architecto deserunt fuga.
          Accusamus rerum totam voluptas, veniam animi suscipit culpa et itaque
          rem quidem? Nam nesciunt excepturi numquam enim dicta hic, eos saepe
          minus voluptatem praesentium nostrum molestiae aliquid. Quas, magnam
          voluptas repellat enim nostrum illo minima dolore molestiae a
          quibusdam tempore ea tenetur expedita quo quidem ex distinctio
          reprehenderit delectus! Vel labore, quisquam nulla eum hic accusantium
          cum. Odit doloribus, cum labore veniam tempore iste at eos cupiditate
          totam architecto voluptas repellendus, possimus ducimus dolore in.
          Accusamus voluptatum ullam harum, assumenda voluptatibus molestias ab
          exercitationem nihil eius ipsam beatae blanditiis ut aliquam. Dolorem
          dolores, voluptas et hic amet eius magni vitae architecto sit quis
          accusantium sed deleniti fuga veritatis quam ratione cum officia,
          voluptatibus suscipit doloribus harum alias odio. Doloremque dolores
          eum reprehenderit quos impedit eveniet distinctio in ea, ex neque quae
          sint quam. Ex qui saepe dolor minus facere, quia impedit magnam ab
          ullam illum nesciunt repellendus accusantium earum quidem in dolore
          reiciendis facilis corrupti repellat veritatis? Dicta, atque earum.
          Nisi molestias rerum modi soluta aspernatur laborum dignissimos rem
          libero blanditiis amet laboriosam incidunt alias beatae pariatur
          labore quis, iure quisquam! Quibusdam ut cumque eaque consequuntur
          eveniet totam obcaecati veniam excepturi veritatis ipsa reprehenderit
          maiores ab recusandae corporis, culpa eligendi, incidunt hic aut!
          Assumenda, mollitia? Provident iste perspiciatis eveniet explicabo aut
          sapiente atque nostrum quidem, quia maxime debitis veniam quod ratione
          dolorum, odit nesciunt laboriosam repudiandae inventore amet
          laudantium voluptatibus earum similique! Sit vitae dolorem dolores ut
          enim quis natus possimus maiores molestiae ullam est, praesentium iure
          quas tempore ipsum non dolorum sint perspiciatis. Laboriosam, porro
          nulla veritatis sapiente illo reiciendis recusandae esse, quibusdam
          sit corporis facilis corrupti! Placeat voluptatem illum architecto
          repellat expedita magni. Voluptas voluptatibus itaque saepe blanditiis
          tempore quisquam nam ea dicta iusto at. Quis voluptas molestiae enim
          autem laboriosam rerum iusto, eligendi veritatis at, magni omnis
          recusandae similique veniam modi obcaecati cum. Eligendi, eaque. Et
          cupiditate enim magnam est dolorem voluptatum nihil quod minima sunt
          adipisci consectetur placeat, officiis expedita quam reprehenderit
          ullam voluptatibus, laudantium dolor quas. Nemo, rerum vitae debitis
          adipisci ex tempora laboriosam qui. Cumque rerum reiciendis magni
          perspiciatis libero assumenda sunt aliquid unde debitis numquam
          ratione vel molestias, vitae minima placeat, fugit perferendis eos.
          Odio pariatur laudantium aut minus delectus iure dolores magni
          molestiae! Consectetur, deserunt ut! Architecto consectetur ipsum
          similique id sint deleniti, voluptas tenetur earum molestias et, qui
          obcaecati dolore eos nihil veniam quos odit quam doloribus deserunt
          alias iste provident. Rerum debitis aperiam quo id sed commodi,
          reiciendis dignissimos iste accusantium et, sint, ad adipisci odio
          atque dolorum itaque rem voluptatum quos quae facere enim? Similique,
          nobis! Id, numquam quia adipisci iure aperiam velit quos labore
          quisquam aliquid consequuntur ipsa, alias commodi sequi incidunt atque
          repellendus repellat asperiores itaque ea a omnis nihil. Labore a quod
          exercitationem, deserunt quasi facere nobis dolores, cumque in
          assumenda mollitia nihil ex ipsa architecto provident dolorem! Esse id
          obcaecati repudiandae soluta placeat fuga assumenda commodi quos
          facere suscipit nemo, nesciunt magni necessitatibus error eos rem
          molestias maxime! Earum cum hic aperiam dolore minima sed vitae et
          numquam culpa doloribus, velit cumque quisquam! Voluptates maiores
          ipsam dolor numquam accusantium in officia velit odit, dolorem sunt.
          Sapiente, reprehenderit facilis? Aliquam culpa sint ea doloribus fuga
          vitae rerum? Sit recusandae saepe tenetur quas repudiandae omnis
          officiis, nihil ipsam voluptatibus quia dolore quaerat veniam, maiores
          eos, ut iure dolor fugit repellat nisi accusantium! Necessitatibus
          architecto adipisci totam sed expedita nobis quae. Accusamus et
          explicabo nihil sint reiciendis optio officia est totam dicta vitae
          laudantium beatae praesentium, fuga rem eum omnis debitis id commodi
          quis ad esse, amet iste quidem! Eum laborum libero, deserunt
          repudiandae nesciunt vero eveniet cumque beatae quo! Eos consequuntur,
          aperiam sit quia minus maiores cupiditate quis officia recusandae
          dignissimos quo nemo dolor beatae aliquam dolorum repellendus ullam
          praesentium reiciendis sint deleniti quibusdam tenetur iure odit?
          Molestias, illo. Porro fugit, consequuntur laudantium corrupti fuga
          tempora sit distinctio sequi. Aliquid commodi blanditiis doloremque
          dolor iusto omnis ratione modi inventore praesentium, quibusdam amet.
          Officia illum, veritatis, molestias repellat numquam quod reiciendis
          iusto at quia sunt voluptate obcaecati minus consectetur eum voluptas
          quae labore ad, reprehenderit deleniti aspernatur impedit. Accusamus
          sequi quos vel at suscipit ratione distinctio neque qui ut blanditiis
          magnam exercitationem tempore similique, doloribus est corrupti quas
          harum? Quasi optio sit quo reprehenderit, beatae sapiente nobis
          possimus quisquam, nulla pariatur necessitatibus. Nostrum ex animi
          esse ut autem ipsum doloremque. Fugit molestias beatae aspernatur
          doloribus debitis repellendus ipsam omnis voluptatibus eaque maiores
          quaerat nemo placeat libero a neque doloremque officia pariatur
          accusantium temporibus, tempora assumenda vitae. Deserunt odit fugiat
          in natus numquam? Sit praesentium quaerat fugiat animi officia aliquam
          neque earum dolorem! Nihil ea quia culpa quo eius quas similique sequi
          unde suscipit vero hic, adipisci, delectus tenetur voluptatibus libero
          dignissimos! Ducimus eos repellendus ea perspiciatis ex dolore!
          Repellendus accusantium laboriosam culpa amet est. Repellat dicta
          laborum quasi similique? Quam neque voluptatem animi repellendus iste
          earum dolore nulla sit atque ab quaerat voluptatum, natus explicabo
          vel aliquam accusamus blanditiis, voluptas quo fuga reprehenderit
          doloribus est deserunt quisquam ducimus. Consectetur porro ducimus,
          tenetur, tempore facere voluptate obcaecati facilis consequuntur hic
          quo iusto labore, repellendus voluptatibus impedit. Quaerat rem odio
          maiores voluptas a ratione, perferendis dolore molestias adipisci
          perspiciatis at vel eum et nisi maxime impedit aspernatur consequuntur
          iste. Officiis fugit ullam eligendi recusandae beatae neque aut ex?
          Impedit cupiditate vero provident eveniet architecto quisquam expedita
          quos eos voluptatum officiis. Officia minus tempora consectetur minima
          dolor cupiditate itaque, et consequatur officiis harum facilis porro,
          expedita illo, amet ex commodi provident voluptate repellendus
          voluptatum debitis? Nobis magnam voluptates dolore. Molestias deleniti
          itaque non est numquam aut ab! Iusto eum itaque totam consectetur,
          nobis ut debitis corporis repellendus id, velit provident. Quasi
          reiciendis deserunt possimus ullam ex tempore eligendi repudiandae
          distinctio iste amet. Repellat, exercitationem laudantium dolores
          ducimus libero inventore nihil ab a temporibus similique aperiam
          labore hic totam magnam, distinctio explicabo quo facere quaerat omnis
          ex animi! Illum at molestiae animi recusandae dolorum distinctio ullam
          exercitationem, sapiente in, tempore repudiandae. Non optio cum
          eveniet nihil odio omnis error quos repudiandae veniam illum,
          repellendus animi consequatur et fuga deleniti nisi, eius doloribus?
          Eaque et assumenda obcaecati blanditiis dolorum cumque consequuntur ut
          hic, rem expedita illo incidunt reprehenderit saepe mollitia minus
          laborum iste laudantium exercitationem! Velit commodi culpa iste
          perferendis qui repellat deserunt quasi aliquid ea, porro dignissimos
          saepe iure esse. Numquam assumenda, aliquid dolorum voluptas veniam
          ipsa fuga, laborum voluptate nesciunt et nisi illum quis, temporibus
          repellendus? Nesciunt odio nemo similique sint commodi aliquam
          corporis, magnam a impedit voluptatem itaque minus labore tempore
          excepturi saepe maiores accusantium, alias distinctio exercitationem
          assumenda ea! Quos inventore ipsa architecto voluptatem ut, sit a
          totam unde quaerat repellat, facere dolorum cumque? Rerum odit
          voluptatibus voluptatum aliquid exercitationem explicabo distinctio
          maiores consequatur quibusdam, reprehenderit ex laudantium magni.
          Explicabo dignissimos dolor ipsam tenetur, consectetur libero
          distinctio cum maiores tempora eum dolorem, ad accusantium numquam
          illo a unde. Explicabo, corporis. Iure dolor similique repellat. Odio
          sed illo ut quae fugit laboriosam recusandae beatae id. Dignissimos ea
          nesciunt odit ducimus quae eius, corporis consequuntur! Enim dolor
          quis iusto minima rem beatae ea quae, velit totam, eos distinctio
          quidem nemo doloribus! Laudantium minima earum, quia impedit voluptate
          reprehenderit ea vitae similique fuga quo neque inventore aut
          molestiae unde, eaque a? Fugit at sed, consequuntur officiis repellat
          tempora dignissimos facilis. Veritatis magnam exercitationem nesciunt
          deleniti molestias. Sint esse pariatur neque at. Quasi nesciunt iure
          eligendi libero quis, explicabo unde incidunt dolores corrupti
          repellendus fugiat architecto eaque porro tempora magni veritatis vel
          ipsam odio atque ullam delectus est sed quod? Accusantium quidem
          eveniet earum nulla, quisquam eum eius alias blanditiis repellendus?
          Perspiciatis voluptates odit quos earum odio inventore molestiae
          similique esse repudiandae! Non doloribus nobis architecto molestias
          illum, exercitationem cumque necessitatibus accusantium laborum, a
          rerum quis, nam quae veniam voluptate nostrum doloremque! Quidem
          veritatis quae itaque in dolorum neque laudantium incidunt fuga
          aliquid ex tempore cum debitis suscipit ipsam ullam modi, error, fugit
          molestias sit sapiente quisquam amet atque natus laboriosam? Minima
          quas esse ullam sunt rem delectus distinctio repellat maxime sint
          eligendi eos dolore, ducimus, recusandae enim quae neque nobis
          laudantium! Facere sequi eaque, nemo vitae quo sint tenetur quis dicta
          ullam numquam distinctio harum, eveniet deserunt libero aspernatur
          omnis expedita aut. Impedit voluptates iure in quia, doloremque
          necessitatibus. Cupiditate facilis provident harum incidunt rerum
          consectetur ipsum fuga, distinctio obcaecati soluta, fugit quas
          aliquid aperiam aliquam id, aut facere natus sequi! Alias ad
          perspiciatis deserunt. Veritatis voluptatibus et quasi dignissimos
          minus. Laborum voluptates voluptatibus quis porro architecto. Quam
          incidunt eum ad quaerat quae saepe sunt alias architecto ipsa ipsam
          nam minus consequuntur beatae consectetur explicabo, fuga sint illum
          odit delectus ex corporis? Inventore dolore ipsum, doloribus
          consequatur quibusdam veniam totam enim ratione soluta natus
          cupiditate doloremque reiciendis corrupti vel aut. Hic dignissimos
          eos, eum eius quisquam repellendus distinctio dolores incidunt
          accusantium quis culpa! Quia iusto deserunt aperiam totam voluptatum
          impedit aut doloremque qui modi neque, deleniti esse magni vitae earum
          rerum, obcaecati ipsam quae odio laborum tempora amet blanditiis dolor
          eos dolorem. Enim distinctio delectus fuga natus cumque voluptate
          dolores placeat dolor repudiandae ad facere, deserunt nobis nisi
          consequatur pariatur voluptas ratione fugit voluptatum adipisci
          voluptatibus sunt rem sed. Laudantium ducimus, quo vitae quisquam
          reiciendis facilis pariatur amet impedit laboriosam dolorum doloremque
          consequuntur culpa voluptatum illo optio accusamus unde veritatis sunt
          commodi veniam officia deleniti dignissimos ullam tempore? Tempora
          dignissimos omnis rerum error ratione similique suscipit, architecto
          excepturi delectus quae alias numquam eos obcaecati pariatur atque
          nemo voluptates unde! Cum quas quibusdam nemo ratione magni eligendi
          facere suscipit illo corporis, itaque dolores quod mollitia aut neque
          impedit pariatur voluptate aliquid quae magnam sunt ab deleniti alias
          illum. Temporibus, recusandae illum. Dolorum neque porro atque vero
          odio maiores perspiciatis? Iste eum officiis recusandae explicabo,
          consectetur aliquid ipsa tenetur odit amet ab saepe aliquam non modi
          animi unde neque cum, quas corporis, dolor id. Maiores non suscipit
          similique sapiente tempore iure quae consequatur, praesentium rerum
          facilis neque mollitia molestias consequuntur porro alias, error quos.
          Aliquid cupiditate tempore voluptate consequatur repudiandae dolorem
          facere neque quam eveniet aperiam quia, molestiae explicabo cumque
          nostrum, inventore velit quod! Sequi expedita sed excepturi, doloribus
          necessitatibus consectetur maiores animi temporibus ipsa, doloremque
          vero deserunt cum est laborum perspiciatis sint! Voluptatibus fugit
          porro doloribus maiores nesciunt id iste totam sit magnam,
          consequuntur ab aperiam, incidunt, dolorem libero? Laudantium totam
          accusamus obcaecati aut ex consequuntur cupiditate animi, voluptas
          fugit, rem repellat repellendus velit exercitationem ducimus aliquam
          sed omnis, unde voluptates. Non enim quibusdam praesentium eligendi
          unde mollitia aperiam doloribus veritatis, facere voluptates magni ab,
          dicta voluptate. Sint eligendi, consequatur ratione tempore deserunt
          accusamus sed quisquam adipisci alias. Voluptates qui quos nam nostrum
          doloremque earum voluptatem nemo accusamus, quae unde totam sit ut
          veritatis aliquid temporibus itaque, dolor eos quod. Voluptatibus, hic
          impedit? Dolorem quis, possimus nulla quaerat facilis exercitationem
          eius. Fugiat, quod asperiores repellendus cumque consequatur
          reprehenderit? Quia nam debitis, odio quam minus ratione, perferendis
          tenetur at molestias obcaecati maiores quisquam? Excepturi asperiores
          debitis delectus eligendi, officia dolores soluta ex corrupti sequi
          expedita voluptate voluptatibus voluptas consectetur, accusantium
          aperiam laborum odio nesciunt veniam exercitationem, cupiditate sint
          mollitia tempore? Sit, totam? Earum, laborum voluptatibus quasi, natus
          necessitatibus quas magni dolore laudantium quia possimus, rem ad
          ipsum officiis vitae corporis. Aspernatur a nostrum saepe minus magni.
          Animi eligendi, atque et nemo, illo blanditiis magni suscipit placeat
          facere tempora commodi. Blanditiis nemo, ad modi, officia molestias
          cum fugit possimus aliquid voluptates quae rem nulla adipisci?
          Architecto necessitatibus ducimus amet quas ab est, illo quos odio
          ratione tempore numquam deleniti non. Ut modi sit in temporibus
          quisquam autem laboriosam beatae porro at eaque culpa veniam sapiente
          quas repellat numquam quam, ad, sint quis, suscipit optio. Maxime
          accusamus illo facilis, quaerat quod id. A debitis ipsam deserunt, non
          dignissimos ex asperiores porro! Distinctio illo dolorem alias, modi
          commodi eaque error possimus aut nobis voluptatibus, vero sapiente id
          atque cumque dicta! Mollitia alias nemo corrupti accusamus commodi
          provident dolore repudiandae quam quae nisi, perferendis soluta
          adipisci maxime impedit expedita explicabo non aliquid dolorum,
          necessitatibus nostrum itaque id sapiente molestiae? Tempora voluptas
          dolorem porro, dolorum laboriosam mollitia? Tempore incidunt aut nam
          doloremque iure blanditiis, harum voluptas quo fugiat unde minus cum.
          Consectetur, suscipit natus odio quos laborum sit non velit, ad
          maiores cum quisquam. Officiis recusandae velit earum ad dolore itaque
          quo perspiciatis molestiae, laborum magnam repellat incidunt assumenda
          eaque omnis corrupti doloremque iste ullam debitis unde! Corporis
          nesciunt eos sunt repudiandae doloremque dolorum laboriosam illum,
          unde, quas, voluptate adipisci nihil accusantium quia! Quas quasi
          facilis unde similique deleniti praesentium eum ab sapiente labore
          corporis, tenetur id totam! Fugit, exercitationem? Enim quae modi
          eveniet repellat odio voluptatibus dolore similique repellendus quas
          esse perspiciatis debitis aspernatur rerum alias laboriosam minima
          excepturi ullam veritatis, accusantium eaque, rem soluta eligendi
          asperiores! Libero excepturi voluptate ea veniam, mollitia culpa
          molestias natus aspernatur asperiores quasi corrupti sint, a
          praesentium repudiandae animi tempore ut, deserunt nostrum debitis
          dolor perspiciatis odio nobis id in. Quis sequi quisquam nam doloribus
          maxime voluptas voluptatem minima. Corporis consequuntur unde
          inventore, illum recusandae magni eveniet! Nesciunt recusandae
          voluptatibus facere quis voluptas odio ut inventore veritatis laborum,
          reiciendis dicta expedita, illo optio accusamus velit ipsum et minus
          porro omnis? Ullam harum repellat, voluptatibus quas, ex quia aperiam
          quaerat, molestiae atque culpa assumenda. Odio quis saepe incidunt
          explicabo provident magnam! Alias iure nihil fugit dolores vitae
          deserunt dicta ut voluptatum debitis vel animi et iusto inventore nisi
          tempore adipisci ipsam pariatur aspernatur accusamus provident
          doloremque, laudantium, eveniet fuga! Voluptates provident ipsam enim
          doloremque tempora veniam ullam labore quasi velit fugit. Tempore
          quasi ipsam non. Consequuntur laboriosam eum cupiditate qui quos porro
          deleniti nisi nostrum consectetur ipsum molestiae, provident debitis
          dolorem nulla quo esse architecto corporis? Magnam omnis voluptates,
          est consequatur debitis dicta delectus, ut quibusdam, non id dolor
          voluptatum sapiente doloribus quos quo ad sed doloremque deleniti
          officia consequuntur! Aperiam omnis ullam ipsa voluptate
          necessitatibus facilis nostrum excepturi eveniet! Voluptatibus, ad
          esse! Dolores optio earum laborum aspernatur sapiente laboriosam harum
          animi praesentium atque quidem nesciunt facilis iure quos cum, et,
          eligendi consequatur nihil vitae? Nemo consequuntur vitae distinctio
          ut doloremque vel inventore adipisci, rerum delectus sit harum sequi
          recusandae mollitia quaerat doloribus eum quis nulla maxime quas
          repellat. Amet culpa dicta dignissimos accusantium fuga autem dolor
          tempora non ex sint nisi distinctio, officia nulla vero, velit eum
          vitae beatae? Nisi cupiditate omnis illo placeat atque rem nobis.
          Cupiditate corrupti quam excepturi itaque magnam? Natus, facere?
          Doloribus harum quisquam natus, cumque voluptatibus beatae. Ipsa
          similique eius accusantium soluta sapiente, facere ipsam eos
          praesentium doloribus debitis incidunt ipsum aperiam sit voluptate
          repellendus culpa autem enim! Nulla dolorem sint suscipit eum ut,
          temporibus quidem, officia dolore voluptas molestiae aliquid enim
          voluptatum ipsum praesentium! Quae a sint laudantium ab laborum,
          reiciendis magnam cumque repellat hic molestiae impedit praesentium,
          beatae earum nihil sequi vero vitae explicabo soluta commodi accusamus
          ratione nobis. Quos provident est ipsam voluptate commodi voluptatibus
          non veniam fugiat odio vitae magni inventore quia nostrum aliquam, ea
          odit. Iste illum porro nesciunt neque incidunt possimus, eum
          blanditiis iusto culpa nihil obcaecati quaerat tenetur rerum. Incidunt
          obcaecati voluptatem eveniet minus laborum dignissimos ratione
          excepturi voluptates! Quae omnis beatae eaque non ab alias vitae
          voluptatibus recusandae veritatis minus mollitia aspernatur laboriosam
          quaerat voluptates dolorum eum libero reprehenderit quidem, quis magni
          nisi possimus. Natus autem quasi aut vero repellendus ea voluptate
          animi, ipsum amet voluptates alias. Repudiandae autem tenetur fuga
          reprehenderit inventore. Optio beatae, alias porro, ex doloribus eum
          quibusdam explicabo quae nostrum eaque voluptate suscipit, nesciunt
          modi. Dolor aspernatur molestias recusandae. Dolorum, quis a. Eligendi
          aperiam at atque similique, sapiente dolore aut magni ipsa vel
          debitis, ab minima nemo maiores facilis commodi ratione pariatur.
          Accusantium nostrum omnis illum eos voluptates, dolorem iure magnam
          atque assumenda sint voluptate nihil ut necessitatibus at soluta
          adipisci fugit. Quae voluptatibus ratione consectetur at libero
          laudantium quaerat est maxime esse nulla, voluptatum repellendus! Nemo
          aperiam ab, molestias nobis veniam mollitia provident cupiditate
          necessitatibus voluptatibus facilis aliquam iste enim eum facere non!
          Nulla corrupti temporibus numquam labore delectus molestiae incidunt
          cum architecto voluptates ex aspernatur animi repellat eum praesentium
          inventore velit nam dolorum voluptate magni exercitationem ipsam,
          maiores tenetur sit ipsum. Eum quisquam blanditiis minima ratione
          laudantium ipsum vitae error est et reprehenderit ad suscipit magni
          non ipsa, expedita natus iusto quae enim voluptatibus eaque nostrum
          facere neque perferendis quibusdam. Aliquam ipsum doloribus iure
          minima id, ipsa dolor maiores velit quam repudiandae quo libero sint
          cumque error nulla exercitationem ipsam a ducimus fugit autem corporis
          optio expedita? In mollitia odio quos nostrum natus, corporis quae
          numquam nesciunt fugit! Nesciunt explicabo minus voluptatum.
          Similique, omnis exercitationem commodi quae nihil blanditiis pariatur
          reiciendis delectus, maxime neque vitae debitis dolore earum sed
          consequuntur dicta nesciunt molestiae laboriosam dignissimos fugiat
          ipsum expedita magni ex? Corrupti itaque, enim ex asperiores impedit
          repellat earum labore ullam aspernatur vitae sed quam rerum fugit.
          Maiores, nihil facilis quis quos et fuga dolore dignissimos dolorum
          modi illo adipisci aut nisi est sequi quasi mollitia praesentium
          voluptas maxime nemo itaque blanditiis voluptates deleniti iusto? Fuga
          nihil minima quidem nesciunt ratione quis consequatur veritatis sunt
          quibusdam facere nulla nobis officia doloremque harum explicabo odit
          et, quas voluptates perspiciatis praesentium illum! Consequatur error
          tempora nam autem at quasi sint temporibus, earum voluptatum ad
          cupiditate, id inventore natus tenetur dicta iure! Veniam tenetur
          officiis molestias magni quidem sapiente blanditiis dolore minima,
          iusto aut voluptatem, obcaecati qui facere voluptatibus itaque
          repellendus delectus sequi ipsam adipisci nobis incidunt earum! Eaque,
          asperiores odio aspernatur iure, in fuga vero at eum ex molestiae
          voluptatibus necessitatibus obcaecati maiores id harum! Quaerat quae
          nulla voluptates corrupti minima, ipsam ad earum quos modi? Inventore
          maxime animi adipisci molestias id aspernatur esse eaque molestiae
          iure consequuntur non, sequi maiores cumque explicabo est quisquam?
          Vitae quibusdam enim tempore natus, placeat labore magnam! Facere
          exercitationem debitis animi excepturi suscipit, asperiores autem
          voluptatum, neque odit quaerat itaque. At illo optio cupiditate
          tempora nulla soluta similique totam aut est. Nemo error eveniet
          laboriosam, consectetur accusantium voluptate adipisci ut modi.
          Maiores a dignissimos voluptatum est error laudantium magnam, natus
          quo aliquam numquam earum perspiciatis? Tempora laudantium hic ea
          harum, accusamus, dolorem facilis quo velit, esse voluptatibus illum
          vitae! Enim nam beatae adipisci, nisi velit odit, deleniti, non
          distinctio impedit dolorum consequuntur! Ad nam a unde ipsam
          blanditiis porro quasi adipisci deleniti inventore, assumenda fuga
          rerum eum sapiente tempore architecto nemo nobis! Voluptatem, quod
          libero! Enim recusandae officia autem sunt assumenda quo, expedita
          sint perferendis suscipit excepturi molestiae at sapiente veritatis.
          Doloribus obcaecati fugit ratione corporis odit, ut non unde incidunt
          sapiente dolorum fugiat, repudiandae dolores, aliquid a voluptate
          voluptas hic debitis aut reprehenderit illum rerum. Veniam quia, minus
          fuga a expedita nulla perspiciatis voluptate dignissimos magni
          provident molestias doloribus culpa voluptatibus labore, vel veritatis
          illum, tempore iste facilis. Necessitatibus repudiandae quaerat minus?
          Assumenda, consectetur facilis.
        </Grid>
      </Grid>
    </Box>
  );
};

export default Menu;






// <Hide below="md">
// <Box>
//   <Center>
//     <Heading size="lg">KFC MENU</Heading>
//   </Center>
// </Box>
// </Hide>
// <Box h="20px">
// <Center>
//   <NavLink to="#">Hot Deals</NavLink>
// </Center>
// </Box>
// <Box h="20px">
// <Center>
//   <NavLink to="#">Chicken Buckets</NavLink>
// </Center>
// </Box>
// <Box h="20px">
// <Center>
//   <NavLink to="#">Hot Launches</NavLink>
// </Center>
// </Box>
// <Box h="20px">
// <Center>
//   <NavLink to="#">Box Meals</NavLink>
// </Center>
// </Box>
// <Box h="20px">
// <Center>
//   <NavLink to="#">Burgers</NavLink>
// </Center>
// </Box>
// <Box h="20px">
// <Center>
//   <NavLink to="#">Snack</NavLink>
// </Center>
// </Box>
// <Box h="20px">
// <Center>
//   <NavLink to="#">Beverages and Desserts</NavLink>
// </Center>
// </Box>
// </Stack>
// </Box>