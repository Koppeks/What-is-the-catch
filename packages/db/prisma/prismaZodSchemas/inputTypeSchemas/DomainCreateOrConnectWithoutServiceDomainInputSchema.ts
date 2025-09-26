import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DomainWhereUniqueInputSchema } from './DomainWhereUniqueInputSchema';
import { DomainCreateWithoutServiceDomainInputSchema } from './DomainCreateWithoutServiceDomainInputSchema';
import { DomainUncheckedCreateWithoutServiceDomainInputSchema } from './DomainUncheckedCreateWithoutServiceDomainInputSchema';

export const DomainCreateOrConnectWithoutServiceDomainInputSchema: z.ZodType<Prisma.DomainCreateOrConnectWithoutServiceDomainInput> = z.object({
  where: z.lazy(() => DomainWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => DomainCreateWithoutServiceDomainInputSchema),z.lazy(() => DomainUncheckedCreateWithoutServiceDomainInputSchema) ]),
}).strict() as z.ZodType<Prisma.DomainCreateOrConnectWithoutServiceDomainInput>;

export default DomainCreateOrConnectWithoutServiceDomainInputSchema;
