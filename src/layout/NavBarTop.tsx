function NavBarTop() {
    return (
       
        <div className="w-full h-14 bg-[#131313] text-white flex items-center justify-between px-6">
            
            <div>
                <h1 className="text-[#F5D08A] font-medium text-lg">Black Amber</h1>
            </div>

            
            <div className="flex items-center gap-6">
                
                
                <span className="cursor-pointer hover:text-gray-300">Sino</span>
                <span className="cursor-pointer hover:text-gray-300">Engrenagem</span>
                
                
                <div className="w-8 h-8 bg-blue-600 rounded-full cursor-pointer"></div>
            </div>
            
        </div>
    );
}

export default NavBarTop;