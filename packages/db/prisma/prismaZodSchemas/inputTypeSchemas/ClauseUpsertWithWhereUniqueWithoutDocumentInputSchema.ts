import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseWhereUniqueInputSchema } from './ClauseWhereUniqueInputSchema';
import { ClauseUpdateWithoutDocumentInputSchema } from './ClauseUpdateWithoutDocumentInputSchema';
import { ClauseUncheckedUpdateWithoutDocumentInputSchema } from './ClauseUncheckedUpdateWithoutDocumentInputSchema';
import { ClauseCreateWithoutDocumentInputSchema } from './ClauseCreateWithoutDocumentInputSchema';
import { ClauseUncheckedCreateWithoutDocumentInputSchema } from './ClauseUncheckedCreateWithoutDocumentInputSchema';

export const ClauseUpsertWithWhereUniqueWithoutDocumentInputSchema: z.ZodType<Prisma.ClauseUpsertWithWhereUniqueWithoutDocumentInput> = z.strictObject({
  where: z.lazy(() => ClauseWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ClauseUpdateWithoutDocumentInputSchema), z.lazy(() => ClauseUncheckedUpdateWithoutDocumentInputSchema) ]),
  create: z.union([ z.lazy(() => ClauseCreateWithoutDocumentInputSchema), z.lazy(() => ClauseUncheckedCreateWithoutDocumentInputSchema) ]),
});

export default ClauseUpsertWithWhereUniqueWithoutDocumentInputSchema;
