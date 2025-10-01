import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentTriggerWhereUniqueInputSchema } from './DocumentTriggerWhereUniqueInputSchema';
import { DocumentTriggerCreateWithoutTriggerInputSchema } from './DocumentTriggerCreateWithoutTriggerInputSchema';
import { DocumentTriggerUncheckedCreateWithoutTriggerInputSchema } from './DocumentTriggerUncheckedCreateWithoutTriggerInputSchema';

export const DocumentTriggerCreateOrConnectWithoutTriggerInputSchema: z.ZodType<Prisma.DocumentTriggerCreateOrConnectWithoutTriggerInput> = z.object({
  where: z.lazy(() => DocumentTriggerWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => DocumentTriggerCreateWithoutTriggerInputSchema),z.lazy(() => DocumentTriggerUncheckedCreateWithoutTriggerInputSchema) ]),
}).strict() as z.ZodType<Prisma.DocumentTriggerCreateOrConnectWithoutTriggerInput>;

export default DocumentTriggerCreateOrConnectWithoutTriggerInputSchema;
