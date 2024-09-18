import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import classNames from 'classnames';


const Accordions = () => (
  <Accordion.Root className="AccordionRoot" type="single" defaultValue="item-1" collapsible>
    <Accordion.Item className="AccordionItem" value="item-1">
      <AccordionTrigger><div>ВІДСТРОЧКА ВІД ПРИЗОВУ НА ВІЙСКОВУ СЛУЖБУ ПІД ЧАС МОБІЛЗАЦІЇ</div></AccordionTrigger>
      <AccordionContent>
      <h2>- Отримання відстрочки по догляду.</h2>
      <h2>- Отримання відстрочки по навчанню.</h2>
      <h2>- Отримання відстрочки по групі інвалідності. </h2>
      <h2>- Оскарження рішень ТЦК та СП.</h2>
      <h2>- Супровід адвоката до ТЦК та СП.</h2>
      <h2>- Оскарження штрафів ТЦК та СП.</h2>
      <h2>- Незаконна мобілізація.</h2>
      </AccordionContent>
    </Accordion.Item>

    <Accordion.Item className="AccordionItem" value="item-2">
      <AccordionTrigger><div>ЗВІЛЬНЕННЯ З ВІЙСКОВОЇ СЛУЖБИ</div></AccordionTrigger>
      <AccordionContent>
      <h2> -За сімейними обставинами.</h2>
      <h2>-За станом здоровʼя.</h2>
      <h2>-За необхідністю здійснення догляду за своїми батьками чи дружиною.</h2>
   </AccordionContent>
    </Accordion.Item>

    <Accordion.Item className="AccordionItem" value="item-3">
      <AccordionTrigger><div>ПРИЗНАЧЕННЯ АБО ОСКАРЖЕННЯ РІШЕННЯ ВІЙСКОВО-ЛІКАРСЬКОЇ КОМІСІЇ (ВЛК)</div></AccordionTrigger>
      <Accordion.Content className="AccordionContent">
        <div className="AccordionContentText">
        <h2>- Призначення ВЛК у звʼязку з погіршенням стану здоровʼя.</h2>
      <h2>- Оскарження ВЛК у звʼязку з не вірним висновком про ступень здоров’я до військової служби.</h2>
      <h2>- Оскарження ВЛК у звʼязку з не вірним причинним звʼязком або травми захворювання.  </h2>
    </div>
      </Accordion.Content>
    </Accordion.Item>
    <Accordion.Item className="AccordionItem" value="item-4">
      <AccordionTrigger><div>ОТРИМАННЯ СТАТУСУ УЧАСНИКА БОЙОВИХ ДІЙ</div></AccordionTrigger>
      <Accordion.Content className="AccordionContent">
        <div className="AccordionContentText">
        <h2>- Витребування документів для призначення статусу УБД.</h2>
      <h2>- Подача заяви на комісію з питань призначення статусу учасника бойових дій.</h2>
     </div>
      </Accordion.Content>
    </Accordion.Item>
    <Accordion.Item className="AccordionItem" value="item-5">
      <AccordionTrigger><div>ПРИЗНАЧЕННЯ ВИПЛАТИ ВІЙСЬКОВОСЛУЖБОВЦЯМ ТА ЇХ СІМ'ЯМ</div></AccordionTrigger>
      <Accordion.Content className="AccordionContent">
        <div className="AccordionContentText">
        <h2>-   Призначення виплати додаткової винагороди за поранення.</h2>
      <h2>- Призначення бойових виплат.</h2>
      <h2>- Призначення одноразової грошової допомоги у звʼязку отримання групи інвалідності.</h2>
      <h2>- Призначення одноразової грошової допомоги у звʼязку з загибеллю військовослужбовця.</h2>
      <h2>- Призначення виплати сім’ям військовослужбовцям, які перебувають у полоні або зниклі безвісти.</h2>
      </div>
      </Accordion.Content>
    </Accordion.Item>
    <Accordion.Item className="AccordionItem" value="item-6">
      <AccordionTrigger><div>ОСКАРЖЕННЯ РІШЕНЬ КОМАНДУВАННЯ ВІЙСЬКОВОЇ ЧАСТИНИ</div></AccordionTrigger>
      <Accordion.Content className="AccordionContent">
        <div className="AccordionContentText">
        <h2>- Скарга на бездіяльність командування.</h2>
      <h2>- Скарга на ігнорування рапорту.</h2>
      <h2>- Скарга на незаконні дії чи рішення командирів.</h2>
      <h2>- Скарга на не переміщення військовослужбовця.</h2>
   </div>
      </Accordion.Content>
    </Accordion.Item>
    <Accordion.Item className="AccordionItem" value="item-7">
      <AccordionTrigger><div>СКЛАДАННЯ РАПОРТІВ</div></AccordionTrigger>
      <Accordion.Content className="AccordionContent">
        <div className="AccordionContentText">
        <h2>- Рапорт на звільнення.</h2>
      <h2>- Рапорт на присвоєння звання.</h2>
      <h2>- Рапорт на ВЛК.</h2>
      <h2>- Рапорт на переміщення.</h2>
      <h2>- Рапорт на лікування.</h2>
      <h2>- Рапорт на виплати.</h2>
           </div>
      </Accordion.Content>
    </Accordion.Item>
    <Accordion.Item className="AccordionItem" value="item-8">
      <AccordionTrigger><div>ЗАХИСТ АДВОКАТА У КРИМІНАЛЬНІЙ СПРАВІ</div></AccordionTrigger>
      <Accordion.Content className="AccordionContent">
        <div className="AccordionContentText">
        <h2>- Захист по не явці за повісткою.</h2>
      <h2>- Захист по самовільному залишенню військовою частини.</h2>
      <h2>- Захист по не виконанню наказу.</h2>
    </div>
      </Accordion.Content>
    </Accordion.Item>
    <Accordion.Item className="AccordionItem" value="item-9">
      <AccordionTrigger><div>ЗАХИСТ БІЗНЕСУ ПІД ЧАС МОБІЛІЗАЦІЇ ТА ВІЙСЬКОВОГО СТАНУ</div></AccordionTrigger>
      <Accordion.Content className="AccordionContent">
        <div className="AccordionContentText">
        <h2>- Бронювання працівників.</h2>
      <h2>- Проведення вебінарів, конференцій.</h2>
      <h2>- Виїзд адвоката під час перевірки ТЦК та СП.</h2>
      <h2>- Захист по військово - транспортному обовʼязку.</h2>
      <h2>- Визнання підприємства критичним.</h2>
       </div>
      </Accordion.Content>
    </Accordion.Item>
  </Accordion.Root>
);

const AccordionTrigger = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Header className="AccordionHeader">
    <Accordion.Trigger
      className={classNames('AccordionTrigger', className)}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </Accordion.Trigger>
  </Accordion.Header>
));

const AccordionContent = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Content
    className={classNames('AccordionContent', className)}
    {...props}
    ref={forwardedRef}
  >
    <div className="AccordionContentText">{children}</div>
  </Accordion.Content>
));

export default Accordions;