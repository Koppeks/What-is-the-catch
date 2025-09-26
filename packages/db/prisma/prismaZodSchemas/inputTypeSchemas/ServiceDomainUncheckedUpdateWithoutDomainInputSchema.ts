import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';

export const ServiceDomainUncheckedUpdateWithoutDomainInputSchema: z.ZodType<Prisma.ServiceDomainUncheckedUpdateWithoutDomainInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  serviceId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pathPattern: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict() as z.ZodType<Prisma.ServiceDomainUncheckedUpdateWithoutDomainInput>;

export default ServiceDomainUncheckedUpdateWithoutDomainInputSchema;
