import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ServiceDomainWhereUniqueInputSchema } from './ServiceDomainWhereUniqueInputSchema';
import { ServiceDomainUpdateWithoutDomainInputSchema } from './ServiceDomainUpdateWithoutDomainInputSchema';
import { ServiceDomainUncheckedUpdateWithoutDomainInputSchema } from './ServiceDomainUncheckedUpdateWithoutDomainInputSchema';
import { ServiceDomainCreateWithoutDomainInputSchema } from './ServiceDomainCreateWithoutDomainInputSchema';
import { ServiceDomainUncheckedCreateWithoutDomainInputSchema } from './ServiceDomainUncheckedCreateWithoutDomainInputSchema';

export const ServiceDomainUpsertWithWhereUniqueWithoutDomainInputSchema: z.ZodType<Prisma.ServiceDomainUpsertWithWhereUniqueWithoutDomainInput> = z.strictObject({
  where: z.lazy(() => ServiceDomainWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ServiceDomainUpdateWithoutDomainInputSchema), z.lazy(() => ServiceDomainUncheckedUpdateWithoutDomainInputSchema) ]),
  create: z.union([ z.lazy(() => ServiceDomainCreateWithoutDomainInputSchema), z.lazy(() => ServiceDomainUncheckedCreateWithoutDomainInputSchema) ]),
});

export default ServiceDomainUpsertWithWhereUniqueWithoutDomainInputSchema;
