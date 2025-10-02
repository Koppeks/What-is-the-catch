import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentTriggerWhereUniqueInputSchema } from './DocumentTriggerWhereUniqueInputSchema';
import { DocumentTriggerUpdateWithoutTriggerInputSchema } from './DocumentTriggerUpdateWithoutTriggerInputSchema';
import { DocumentTriggerUncheckedUpdateWithoutTriggerInputSchema } from './DocumentTriggerUncheckedUpdateWithoutTriggerInputSchema';
import { DocumentTriggerCreateWithoutTriggerInputSchema } from './DocumentTriggerCreateWithoutTriggerInputSchema';
import { DocumentTriggerUncheckedCreateWithoutTriggerInputSchema } from './DocumentTriggerUncheckedCreateWithoutTriggerInputSchema';

export const DocumentTriggerUpsertWithWhereUniqueWithoutTriggerInputSchema: z.ZodType<Prisma.DocumentTriggerUpsertWithWhereUniqueWithoutTriggerInput> = z.strictObject({
  where: z.lazy(() => DocumentTriggerWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => DocumentTriggerUpdateWithoutTriggerInputSchema), z.lazy(() => DocumentTriggerUncheckedUpdateWithoutTriggerInputSchema) ]),
  create: z.union([ z.lazy(() => DocumentTriggerCreateWithoutTriggerInputSchema), z.lazy(() => DocumentTriggerUncheckedCreateWithoutTriggerInputSchema) ]),
});

export default DocumentTriggerUpsertWithWhereUniqueWithoutTriggerInputSchema;
