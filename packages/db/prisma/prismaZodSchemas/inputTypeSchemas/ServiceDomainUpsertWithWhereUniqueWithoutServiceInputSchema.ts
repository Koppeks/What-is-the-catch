import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ServiceDomainWhereUniqueInputSchema } from './ServiceDomainWhereUniqueInputSchema';
import { ServiceDomainUpdateWithoutServiceInputSchema } from './ServiceDomainUpdateWithoutServiceInputSchema';
import { ServiceDomainUncheckedUpdateWithoutServiceInputSchema } from './ServiceDomainUncheckedUpdateWithoutServiceInputSchema';
import { ServiceDomainCreateWithoutServiceInputSchema } from './ServiceDomainCreateWithoutServiceInputSchema';
import { ServiceDomainUncheckedCreateWithoutServiceInputSchema } from './ServiceDomainUncheckedCreateWithoutServiceInputSchema';

export const ServiceDomainUpsertWithWhereUniqueWithoutServiceInputSchema: z.ZodType<Prisma.ServiceDomainUpsertWithWhereUniqueWithoutServiceInput> = z.object({
  where: z.lazy(() => ServiceDomainWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ServiceDomainUpdateWithoutServiceInputSchema),z.lazy(() => ServiceDomainUncheckedUpdateWithoutServiceInputSchema) ]),
  create: z.union([ z.lazy(() => ServiceDomainCreateWithoutServiceInputSchema),z.lazy(() => ServiceDomainUncheckedCreateWithoutServiceInputSchema) ]),
}).strict() as z.ZodType<Prisma.ServiceDomainUpsertWithWhereUniqueWithoutServiceInput>;

export default ServiceDomainUpsertWithWhereUniqueWithoutServiceInputSchema;
