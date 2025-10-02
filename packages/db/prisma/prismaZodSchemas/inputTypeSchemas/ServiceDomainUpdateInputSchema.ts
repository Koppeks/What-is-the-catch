import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { ServiceUpdateOneRequiredWithoutServiceDomainNestedInputSchema } from './ServiceUpdateOneRequiredWithoutServiceDomainNestedInputSchema';
import { DomainUpdateOneRequiredWithoutServiceDomainNestedInputSchema } from './DomainUpdateOneRequiredWithoutServiceDomainNestedInputSchema';

export const ServiceDomainUpdateInputSchema: z.ZodType<Prisma.ServiceDomainUpdateInput> = z.strictObject({
  id: z.union([ z.cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pathPattern: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  service: z.lazy(() => ServiceUpdateOneRequiredWithoutServiceDomainNestedInputSchema).optional(),
  domain: z.lazy(() => DomainUpdateOneRequiredWithoutServiceDomainNestedInputSchema).optional(),
});

export default ServiceDomainUpdateInputSchema;
