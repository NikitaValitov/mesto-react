function PopupWithForm({
   name,
   title,
   children,
   buttonText,
   isOpen,
   onClose
}) {

   return (
      <div className={`popup popup-${name} ${isOpen ? "popup_opened" : ""}`}>
         <div className="popup__container">
            <h2 className="popup__text">{title}</h2>
            <form
               className={"popup__form-${name}"}
               name={"popup__form - ${name}"}
            >
               {children}
               <button
                  className="popup__save"
                  type="submit">
                  {buttonText}
               </button>
            </form>
            <button
               className="popup__close"
               onClick={onClose}
               type="button"
            >
            </button>
         </div>
      </div>
   );
}

export default PopupWithForm;