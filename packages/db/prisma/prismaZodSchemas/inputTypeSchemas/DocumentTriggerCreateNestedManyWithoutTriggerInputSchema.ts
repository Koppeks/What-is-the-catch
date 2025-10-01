import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentTriggerCreateWithoutTriggerInputSchema } from './DocumentTriggerCreateWithoutTriggerInputSchema';
import { DocumentTriggerUncheckedCreateWithoutTriggerInputSchema } from './DocumentTriggerUncheckedCreateWithoutTriggerInputSchema';
import { DocumentTriggerCreateOrConnectWithoutTriggerInputSchema } from './DocumentTriggerCreateOrConnectWithoutTriggerInputSchema';
import { DocumentTriggerCreateManyTriggerInputEnvelopeSchema } from './DocumentTriggerCreateManyTriggerInputEnvelopeSchema';
import { DocumentTriggerWhereUniqueInputSchema } from './DocumentTriggerWhereUniqueInputSchema';

export const DocumentTriggerCreateNestedManyWithoutTriggerInputSchema: z.ZodType<Prisma.DocumentTriggerCreateNestedManyWithoutTriggerInput> = z.object({
  create: z.union([ z.lazy(() => DocumentTriggerCreateWithoutTriggerInputSchema),z.lazy(() => DocumentTriggerCreateWithoutTriggerInputSchema).array(),z.lazy(() => DocumentTriggerUncheckedCreateWithoutTriggerInputSchema),z.lazy(() => DocumentTriggerUncheckedCreateWithoutTriggerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => DocumentTriggerCreateOrConnectWithoutTriggerInputSchema),z.lazy(() => DocumentTriggerCreateOrConnectWithoutTriggerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => DocumentTriggerCreateManyTriggerInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => DocumentTriggerWhereUniqueInputSchema),z.lazy(() => DocumentTriggerWhereUniqueInputSchema).array() ]).optional(),
}).strict() as z.ZodType<Prisma.DocumentTriggerCreateNestedManyWithoutTriggerInput>;

export default DocumentTriggerCreateNestedManyWithoutTriggerInputSchema;
