import { NgModule } from '@angular/core';
import { VincularComponent } from './vincular/vincular';

import { EditarveiculoComponent } from './editar-veiculo/editar-veiculo';
import { EditarpessoaComponent } from './editar-pessoa/editar-pessoa';

@NgModule({
	declarations: [VincularComponent,
	EditarveiculoComponent,
	EditarpessoaComponent,

	],
	imports: [],
	exports: [VincularComponent,
	EditarveiculoComponent,
	EditarpessoaComponent,
	]
})
export class ComponentsModule {}
