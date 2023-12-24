this.block = window.document.createElement('div');
			this.block.style.position = 'absolute';
			this.block.style.left = this.posX*32;
			this.bloc.style.bottom = this.posY*32;
			this.block.style.width = this.blockSize;
			this.block.style.height = this.blockSize;
			this.block.style.overflow = 'hidden';

			this.img = window.document.createElement('img');
			this.img.src = this.sourcePath + 'Idle.png';
			this.img.style.position = 'absolute';
			this.img.style.left = 0;
			this.img.style.bottom = 0;
			this.img.style.widht = this.blockSize*4;
			this.img.style.height = this.blockSize;