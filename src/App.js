import Test from './Test';
import './App.scss';
import { useTheme } from './vendor/Globals/ThemeProvider';
import Button from './vendor/Components/Button';
import { useLanguage } from './vendor/Globals/LanguageProvider';
import { useDialog } from './vendor/Globals/DialogsProvider';

function App() {

  const { theme, changeTheme } = useTheme();
  const { setCurrentLanguage, getTraductionOf, currentLanguage } = useLanguage();
  const { alert, confirm, openModal } = useDialog();

  return (
    <div className={'App ' + theme}>
      <div className="p-5">
        <Test />
        <div className="m-5">
          <Button onClick={changeTheme} color="light">{getTraductionOf('toggle_theme')}</Button>
          <br /> <br />
          <Button onClick={() => {
            setCurrentLanguage(currentLanguage === 'fr' ? 'en' : 'fr');
          }} color="light">{getTraductionOf('toggle_lang')}</Button>

          <br /> <br />
          <Button onClick={() => {
            alert('Salut les gars !');
          }} color="light">Open Alert</Button>

          <br /> <br />
          <Button onClick={() => {
            confirm('Etes-vous sur de vouloir effectuer cette action ?');
          }} color="light">Open Confirm</Button>

          <br /> <br />
          <Button onClick={() => {
            openModal('Ma super modal', _ => <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere vel optio similique facilis accusantium sunt neque maxime quaerat saepe iste rem, repellat asperiores fugit deleniti odit magni quos, dolorem distinctio id! Tenetur at accusantium magnam similique, cupiditate nobis cum facilis labore nam est, sequi autem consequatur eos facere eius iure iste velit dolore sit. Est eligendi officiis quibusdam suscipit officia tempore quam molestias atque. Ab explicabo assumenda consequuntur labore error dolorum veniam accusamus nobis corrupti delectus, iste enim placeat facilis quaerat, at eos dolores recusandae in! Delectus a nam obcaecati optio. Ab nulla in officia, molestias dolorem incidunt amet eveniet quasi dignissimos consectetur. Quibusdam nisi accusantium consequatur provident autem vitae natus laboriosam repudiandae temporibus corrupti cum pariatur, saepe, suscipit labore ratione consectetur magni quod minima iure possimus non. Accusamus quas perspiciatis atque quidem obcaecati qui consequatur neque expedita? Suscipit neque doloremque porro itaque nam sint dicta asperiores aut quasi. Dignissimos odio dolore, cupiditate aut voluptatum a impedit, suscipit minus esse, ipsam placeat hic necessitatibus. Itaque illum culpa natus! Sequi, voluptates nulla! Nulla aperiam aliquam repellat sed fugiat dolore a vitae beatae, iste autem totam numquam. Ipsam, ullam natus? Totam dolore repellendus reiciendis illo, delectus eaque. Quibusdam, minima? Sed, sequi ipsa. Perspiciatis, impedit! Saepe nesciunt, voluptate, dolore corporis repudiandae earum fugiat, corrupti pariatur debitis nihil laborum dolorum mollitia id officia. Eveniet totam pariatur eum officiis rerum minima deserunt, fuga laborum animi facere quas a illum ea ipsam ab quod corporis impedit et vel, asperiores molestias ratione ipsum? Nihil doloremque ab, dolores repellat beatae laborum recusandae! Nostrum numquam quo voluptates explicabo, ut possimus id officia adipisci expedita, maiores fugiat alias quasi earum est, nisi debitis magni amet tempore! Suscipit iure temporibus cumque voluptas quas officia recusandae sed accusamus, atque quibusdam vero aut dolores praesentium consequatur doloribus doloremque voluptatem odio laudantium illum ratione, obcaecati laboriosam corporis omnis enim! Nostrum nisi quas fugiat quibusdam, adipisci reiciendis modi laborum placeat non maiores, perspiciatis error delectus? Voluptates sint qui cupiditate minus? Rerum dolores modi nobis blanditiis aliquam voluptas enim quasi, voluptatem eum temporibus omnis dolorem, a sint ab impedit ipsam necessitatibus vel dicta earum voluptatibus. Molestiae facilis qui explicabo. Voluptas, quibusdam! Esse recusandae corporis, labore cupiditate deleniti nisi veniam cum numquam, optio omnis quaerat veritatis ipsa impedit repudiandae voluptate facilis repellat ab molestias quis voluptates minus atque fugit! Rem voluptas culpa consequatur aliquid unde, ipsam ipsum assumenda deleniti neque quasi corporis animi veniam voluptates, perferendis dicta iure nobis dolore, dignissimos molestias exercitationem sapiente? Voluptas, sapiente! Maxime nulla ullam cumque nihil iste, atque eum magni explicabo! Ipsa quod temporibus, iste sed provident id iure incidunt officiis, ut, reprehenderit quibusdam recusandae quia enim suscipit omnis! Quo aut amet inventore molestias doloribus ducimus ipsa velit fuga totam, similique numquam provident laboriosam facere, nemo possimus eius magnam accusantium quos quod asperiores. At optio provident deleniti quasi numquam nemo, nisi amet iste modi delectus porro, veniam voluptate cumque libero rerum assumenda. Tempore error sapiente quas, quisquam vitae qui quo corporis, odio mollitia porro numquam, reprehenderit iure fugit ab pariatur veritatis consectetur quae eum eius aspernatur autem. Voluptate quibusdam minima necessitatibus alias expedita optio fugit, voluptatem cumque, asperiores est repellat sed dolorum accusamus doloribus vitae corrupti pariatur totam a cupiditate delectus saepe qui quasi placeat iure! Ratione, placeat eligendi nobis consequuntur dolor impedit obcaecati a, ipsam voluptates deserunt maiores aliquam architecto, rem dicta ullam iure tenetur consectetur eum eius pariatur laboriosam. Ea officiis aut inventore veniam voluptates similique necessitatibus reprehenderit perferendis quos! Quos nostrum recusandae eos amet ut dicta obcaecati, aliquid odit ullam molestiae quia nam, excepturi quibusdam dolore assumenda laboriosam soluta accusantium magni quisquam officiis veniam sed. Error est dolor, dolores illo autem pariatur ea iure cumque non impedit consequatur, sapiente natus? Perspiciatis praesentium itaque magni, excepturi ut sunt aut provident et vitae, saepe odit aliquam ex accusantium quis quam inventore esse qui porro aliquid quia? Harum quisquam voluptatum nobis dicta ab at, a eos sequi perspiciatis doloremque ex, fugiat hic incidunt tempore voluptates fugit distinctio dolor, repellendus totam omnis. Consequuntur fugit alias possimus ea mollitia iure sapiente eaque! Animi ipsa quod ullam voluptatem. Tempora id iusto accusantium nobis. Ex eos, magni provident eum cumque quas? Distinctio accusamus, harum sed, perspiciatis officia modi repellendus ipsa magnam id praesentium, eligendi excepturi aliquam natus perferendis. Deleniti maxime possimus in! Eaque voluptatum magnam sit quasi eligendi totam quos ullam quia quod nam facere enim atque ea nobis nihil delectus doloremque, id laboriosam a possimus perferendis minus at veritatis! Vero hic ut architecto atque repellendus aperiam earum pariatur excepturi minima animi porro reprehenderit laboriosam corrupti ullam distinctio unde temporibus ducimus soluta molestias aut dolor, officia perferendis. Tempora vero explicabo quia velit provident laborum reprehenderit ullam quasi eius atque delectus, quo tenetur vel harum libero voluptatem quaerat sequi? Modi recusandae blanditiis adipisci voluptatibus ab iste aut placeat, illum maxime natus necessitatibus culpa laborum excepturi tempora. Illum soluta cum dolorum tenetur earum similique obcaecati cupiditate nobis reiciendis modi. Quasi officia optio unde, natus iusto ipsa autem nesciunt possimus, alias quos harum magni cumque aspernatur, quod nostrum doloremque incidunt molestias blanditiis dicta obcaecati minima? Fuga repellat, magnam est quaerat quam fugiat dicta dolore nostrum, animi natus rerum autem molestiae provident, hic labore distinctio enim quae similique dignissimos in quis sequi? Minus, cumque non nulla placeat excepturi labore ipsum iure facilis ab vero consequuntur maxime! Facilis quidem esse animi laboriosam harum soluta velit minima quibusdam aut vero ab blanditiis corrupti deleniti, dolor repellendus pariatur. Repellat expedita quaerat eum non dolore, perspiciatis sequi, dolor cupiditate officia nemo ut, illo placeat delectus ex veniam? Nulla expedita quam voluptates a excepturi quisquam vero maiores sequi commodi. Iste, cupiditate officiis architecto aliquam possimus vel provident nesciunt dolore natus optio nihil suscipit, dolores accusamus quasi eaque adipisci excepturi fuga amet consequuntur ipsam voluptatum ut inventore enim? Eius, sed! Odit ullam animi deserunt, modi consectetur quas eaque nemo deleniti consequatur optio labore. Neque, laboriosam eum fugiat provident accusamus nostrum perspiciatis quod commodi consectetur. Repellendus consequatur necessitatibus quasi ducimus, numquam ex quo voluptates? Aperiam reiciendis, provident perferendis error beatae nulla velit in quam nesciunt, eligendi tenetur?</p>);
          }} color="light">Open Modal</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
