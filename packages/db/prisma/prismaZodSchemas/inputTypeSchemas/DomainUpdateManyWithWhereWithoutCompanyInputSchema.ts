import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DomainScalarWhereInputSchema } from './DomainScalarWhereInputSchema';
import { DomainUpdateManyMutationInputSchema } from './DomainUpdateManyMutationInputSchema';
import { DomainUncheckedUpdateManyWithoutCompanyInputSchema } from './DomainUncheckedUpdateManyWithoutCompanyInputSchema';

export const DomainUpdateManyWithWhereWithoutCompanyInputSchema: z.ZodType<Prisma.DomainUpdateManyWithWhereWithoutCompanyInput> = z.strictObject({
  where: z.lazy(() => DomainScalarWhereInputSchema),
  data: z.union([ z.lazy(() => DomainUpdateManyMutationInputSchema), z.lazy(() => DomainUncheckedUpdateManyWithoutCompanyInputSchema) ]),
});

export default DomainUpdateManyWithWhereWithoutCompanyInputSchema;
