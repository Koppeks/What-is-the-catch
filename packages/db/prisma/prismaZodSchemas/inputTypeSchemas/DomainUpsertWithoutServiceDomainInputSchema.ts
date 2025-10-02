import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DomainUpdateWithoutServiceDomainInputSchema } from './DomainUpdateWithoutServiceDomainInputSchema';
import { DomainUncheckedUpdateWithoutServiceDomainInputSchema } from './DomainUncheckedUpdateWithoutServiceDomainInputSchema';
import { DomainCreateWithoutServiceDomainInputSchema } from './DomainCreateWithoutServiceDomainInputSchema';
import { DomainUncheckedCreateWithoutServiceDomainInputSchema } from './DomainUncheckedCreateWithoutServiceDomainInputSchema';
import { DomainWhereInputSchema } from './DomainWhereInputSchema';

export const DomainUpsertWithoutServiceDomainInputSchema: z.ZodType<Prisma.DomainUpsertWithoutServiceDomainInput> = z.strictObject({
  update: z.union([ z.lazy(() => DomainUpdateWithoutServiceDomainInputSchema), z.lazy(() => DomainUncheckedUpdateWithoutServiceDomainInputSchema) ]),
  create: z.union([ z.lazy(() => DomainCreateWithoutServiceDomainInputSchema), z.lazy(() => DomainUncheckedCreateWithoutServiceDomainInputSchema) ]),
  where: z.lazy(() => DomainWhereInputSchema).optional(),
});

export default DomainUpsertWithoutServiceDomainInputSchema;
