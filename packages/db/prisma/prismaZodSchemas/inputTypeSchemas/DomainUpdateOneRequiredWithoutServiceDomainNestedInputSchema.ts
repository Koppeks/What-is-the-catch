import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DomainCreateWithoutServiceDomainInputSchema } from './DomainCreateWithoutServiceDomainInputSchema';
import { DomainUncheckedCreateWithoutServiceDomainInputSchema } from './DomainUncheckedCreateWithoutServiceDomainInputSchema';
import { DomainCreateOrConnectWithoutServiceDomainInputSchema } from './DomainCreateOrConnectWithoutServiceDomainInputSchema';
import { DomainUpsertWithoutServiceDomainInputSchema } from './DomainUpsertWithoutServiceDomainInputSchema';
import { DomainWhereUniqueInputSchema } from './DomainWhereUniqueInputSchema';
import { DomainUpdateToOneWithWhereWithoutServiceDomainInputSchema } from './DomainUpdateToOneWithWhereWithoutServiceDomainInputSchema';
import { DomainUpdateWithoutServiceDomainInputSchema } from './DomainUpdateWithoutServiceDomainInputSchema';
import { DomainUncheckedUpdateWithoutServiceDomainInputSchema } from './DomainUncheckedUpdateWithoutServiceDomainInputSchema';

export const DomainUpdateOneRequiredWithoutServiceDomainNestedInputSchema: z.ZodType<Prisma.DomainUpdateOneRequiredWithoutServiceDomainNestedInput> = z.object({
  create: z.union([ z.lazy(() => DomainCreateWithoutServiceDomainInputSchema),z.lazy(() => DomainUncheckedCreateWithoutServiceDomainInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DomainCreateOrConnectWithoutServiceDomainInputSchema).optional(),
  upsert: z.lazy(() => DomainUpsertWithoutServiceDomainInputSchema).optional(),
  connect: z.lazy(() => DomainWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => DomainUpdateToOneWithWhereWithoutServiceDomainInputSchema),z.lazy(() => DomainUpdateWithoutServiceDomainInputSchema),z.lazy(() => DomainUncheckedUpdateWithoutServiceDomainInputSchema) ]).optional(),
}).strict() as z.ZodType<Prisma.DomainUpdateOneRequiredWithoutServiceDomainNestedInput>;

export default DomainUpdateOneRequiredWithoutServiceDomainNestedInputSchema;
