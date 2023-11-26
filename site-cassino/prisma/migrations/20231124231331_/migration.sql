-- CreateTable
CREATE TABLE "Usuarios" (
    "Id_Usuarios" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Name" TEXT,
    "Email" TEXT NOT NULL,
    "Pass" TEXT NOT NULL,
    "Coin" DECIMAL NOT NULL DEFAULT 0
);

-- CreateTable
CREATE TABLE "Jogo" (
    "Id_Jogo" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Name" TEXT NOT NULL,
    "Descricao" TEXT NOT NULL,
    "V_Play" INTEGER NOT NULL,
    "idCategoria" INTEGER NOT NULL,
    CONSTRAINT "Jogo_idCategoria_fkey" FOREIGN KEY ("idCategoria") REFERENCES "Categorias" ("Id_Categorai") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Categorias" (
    "Id_Categorai" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Name" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuarios_Id_Usuarios_key" ON "Usuarios"("Id_Usuarios");
