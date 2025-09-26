import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ServiceDomainServiceIdDomainIdPathPatternCompoundUniqueInputSchema } from './ServiceDomainServiceIdDomainIdPathPatternCompoundUniqueInputSchema';
import { ServiceDomainWhereInputSchema } from './ServiceDomainWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { ServiceScalarRelationFilterSchema } from './ServiceScalarRelationFilterSchema';
import { ServiceWhereInputSchema } from './ServiceWhereInputSchema';
import { DomainScalarRelationFilterSchema } from './DomainScalarRelationFilterSchema';
import { DomainWhereInputSchema } from './DomainWhereInputSchema';

export const ServiceDomainWhereUniqueInputSchema: z.ZodType<Prisma.ServiceDomainWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    serviceId_domainId_pathPattern: z.lazy(() => ServiceDomainServiceIdDomainIdPathPatternCompoundUniqueInputSchema)
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    serviceId_domainId_pathPattern: z.lazy(() => ServiceDomainServiceIdDomainIdPathPatternCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  serviceId_domainId_pathPattern: z.lazy(() => ServiceDomainServiceIdDomainIdPathPatternCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => ServiceDomainWhereInputSchema),z.lazy(() => ServiceDomainWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ServiceDomainWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ServiceDomainWhereInputSchema),z.lazy(() => ServiceDomainWhereInputSchema).array() ]).optional(),
  serviceId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  domainId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  pathPattern: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  service: z.union([ z.lazy(() => ServiceScalarRelationFilterSchema),z.lazy(() => ServiceWhereInputSchema) ]).optional(),
  domain: z.union([ z.lazy(() => DomainScalarRelationFilterSchema),z.lazy(() => DomainWhereInputSchema) ]).optional(),
}).strict()) as z.ZodType<Prisma.ServiceDomainWhereUniqueInput>;

export default ServiceDomainWhereUniqueInputSchema;
