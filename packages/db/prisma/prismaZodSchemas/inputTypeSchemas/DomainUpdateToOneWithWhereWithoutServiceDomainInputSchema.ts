import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DomainWhereInputSchema } from './DomainWhereInputSchema';
import { DomainUpdateWithoutServiceDomainInputSchema } from './DomainUpdateWithoutServiceDomainInputSchema';
import { DomainUncheckedUpdateWithoutServiceDomainInputSchema } from './DomainUncheckedUpdateWithoutServiceDomainInputSchema';

export const DomainUpdateToOneWithWhereWithoutServiceDomainInputSchema: z.ZodType<Prisma.DomainUpdateToOneWithWhereWithoutServiceDomainInput> = z.strictObject({
  where: z.lazy(() => DomainWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => DomainUpdateWithoutServiceDomainInputSchema), z.lazy(() => DomainUncheckedUpdateWithoutServiceDomainInputSchema) ]),
});

export default DomainUpdateToOneWithWhereWithoutServiceDomainInputSchema;
