export default function FormAddTodo({newTodo, handleChange, AddNewTodo}){
    return(
        <div className="w-full max-w-sm mt-20 mx-auto text-left">
            <div className="w-full mb-5">
                <label htmlFor="todo-title" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Titre de la tâche</label>
                <input 
                    name="title" 
                    type='text' 
                    value={newTodo.title} 
                    onChange={handleChange} 
                    placeholder='Entrez un titre' 
                    className='drop-shadow-md border rounded p-2 w-full' 
                />
            </div>
            
            <div>
                <label htmlFor="todo-desc" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Description de la tâche</label>
                <input 
                    name="description" 
                    type='text' 
                    value={newTodo.description} 
                    onChange={handleChange} 
                    placeholder='Entrez une description' 
                    className='drop-shadow-md border rounded p-2 mb-5 w-full'
                />
            </div>
            <div>
                <label htmlFor="todo-status" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Titre</label>
                <select name="status" value={newTodo.status} onChange={handleChange} className='drop-shadow-md border rounded p-2 w-full'>
                    <option value=''>=== SELECTIONNER UN STATUT ===</option>
                    <option value='A Faire'>A faire</option>
                    <option value='En Cours'>En cours</option>
                    <option value='Terminée'>Terminée</option>
                </select>
            </div>

            <button 
                className="block mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:text-gray-600 focus:shadow-outline"
                onClick={AddNewTodo}
            >
                Ajouter ma tâche
            </button>
        </div>
    )
}