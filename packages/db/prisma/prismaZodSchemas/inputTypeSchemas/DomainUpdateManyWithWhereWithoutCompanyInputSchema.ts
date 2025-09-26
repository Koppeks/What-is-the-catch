import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DomainScalarWhereInputSchema } from './DomainScalarWhereInputSchema';
import { DomainUpdateManyMutationInputSchema } from './DomainUpdateManyMutationInputSchema';
import { DomainUncheckedUpdateManyWithoutCompanyInputSchema } from './DomainUncheckedUpdateManyWithoutCompanyInputSchema';

export const DomainUpdateManyWithWhereWithoutCompanyInputSchema: z.ZodType<Prisma.DomainUpdateManyWithWhereWithoutCompanyInput> = z.object({
  where: z.lazy(() => DomainScalarWhereInputSchema),
  data: z.union([ z.lazy(() => DomainUpdateManyMutationInputSchema),z.lazy(() => DomainUncheckedUpdateManyWithoutCompanyInputSchema) ]),
}).strict() as z.ZodType<Prisma.DomainUpdateManyWithWhereWithoutCompanyInput>;

export default DomainUpdateManyWithWhereWithoutCompanyInputSchema;
